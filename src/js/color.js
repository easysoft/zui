+function ($, Math, window) { "use strict";

    var hexReg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;

    /* color */
    var color = function(r, g, b, a)
    {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 1;

        if(a != undefined) this.a = clamp(number(a), 1);

        if(r != undefined && g != undefined && b != undefined)
        {
            this.r = parseInt(clamp(number(r), 255));
            this.g = parseInt(clamp(number(g), 255));
            this.b = parseInt(clamp(number(b), 255));
        }
        else if(r != undefined)
        {
            var type = typeof(r);
            if(type == 'string')
            {
                this.rgb(hexToRgb(r));
            }
            else if(type == 'number' && g == undefined)
            {
                this.r = parseInt(clamp(r, 255));
                this.g = this.r;
                this.b = this.r;
            }
            else if(type == 'object' && r.hasOwnProperty('r'))
            {
                this.r = parseInt(clamp(number(r.r), 255));
                if(r.hasOwnProperty('g')) this.g = parseInt(clamp(number(r.g), 255));
                if(r.hasOwnProperty('b')) this.b = parseInt(clamp(number(r.b), 255));
                if(r.hasOwnProperty('a')) this.a = clamp(number(r.a), 1);
            }
            else if(type == 'object' && r.hasOwnProperty('h'))
            {
                var hsl = {h: clamp(number(r.h), 360), s: 1, l: 1, a: 1};
                if(r.hasOwnProperty('s')) hsl.g = clamp(number(r.s), 255);
                if(r.hasOwnProperty('l')) hsl.b = clamp(number(r.l), 255);
                if(r.hasOwnProperty('a')) hsl.a = clamp(number(r.a), 1);

                this.rgb(hslToRgb(hsl));
            }
        }
    }

    color.prototype.rgb = function(rgb)
    {
        if(rgb != undefined)
        {
            if(typeof(rgb) == 'object')
            {
                if(rgb.hasOwnProperty('r')) this.r = parseInt(clamp(number(rgb.r), 255));
                if(rgb.hasOwnProperty('g')) this.g = parseInt(clamp(number(rgb.g), 255));
                if(rgb.hasOwnProperty('b')) this.b = parseInt(clamp(number(rgb.b), 255));
                if(rgb.hasOwnProperty('a')) this.a = clamp(number(rgb.a), 1);
            }
            else
            {
                var v = parseInt(number(rgb));
                this.r = v;
                this.g = v;
                this.b = v;
            }
            return this;
        }
        else return {r: this.r, g: this.g, b: this.b, a: this.a};
    }

    color.prototype.hue = function(hue)
    {
        var hsl = this.toHsl();

        if(hue == undefined) return hsl.h;
        else
        {
            hsl.h = clamp(number(hue), 360);
            this.rgb(hslToRgb(hsl));

            return this;
        }
    }

    color.prototype.darken = function(amount)
    {
        var hsl = this.toHsl();

        hsl.l -= amount / 100;
        hsl.l = clamp(hsl.l, 1);

        this.rgb(hslToRgb(hsl));
        return this;
    }

    color.prototype.clone = function()
    {
        return new color(this.r, this.g, this.b, this.a);
    }

    color.prototype.lighten = function(amount)
    {
        return this.darken(-amount);
    }

    color.prototype.fade = function(amount)
    {
        this.a = clamp(amount/100, 1);

        return this;
    }

    color.prototype.spin = function(amount)
    {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;

        hsl.h = hue < 0 ? 360 + hue : hue;
        this.rgb(hslToRgb(hsl));

        return this;
    }

    color.prototype.toHsl = function()
    {
        var r = this.r/ 255,
        g = this.g / 255,
        b = this.b / 255,
        a = this.a;

        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2, d = max - min;

        if (max === min)
        {
            h = s = 0;
        } 
        else
        {
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

            switch (max)
            {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2;               break;
                case b: h = (r - g) / d + 4;               break;
            }
            h /= 6;
        }
        return { h: h * 360, s: s, l: l, a: a };
    }

    color.prototype.luma = function()
    {
        var r = this.r / 255,
            g = this.g / 255,
            b = this.b / 255;

        r = (r <= 0.03928) ? r / 12.92 : Math.pow(((r + 0.055) / 1.055), 2.4);
        g = (g <= 0.03928) ? g / 12.92 : Math.pow(((g + 0.055) / 1.055), 2.4);
        b = (b <= 0.03928) ? b / 12.92 : Math.pow(((b + 0.055) / 1.055), 2.4);

        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }

    color.prototype.saturate = function(amount)
    {
        var hsl = this.toHsl();

        hsl.s += amount / 100;
        hsl.s = clamp(hsl.s);

        this.rgb(hslToRgb(hsl));

        return this;
    }

    color.prototype.desaturate = function(amount)
    {
        return this.saturate(-amount);
    }

    color.prototype.contrast = function(dark, light, threshold)
    {
        if(threshold == undefined) threshold = 0.43;
        else threshold = number(threshold);

        if (typeof light === 'undefined') light = new color(255,255,255,1);
        else light = new color(light);
        if (typeof dark === 'undefined') dark = new color(0,0,0,1);
        else dark = new color(dark);

        if (dark.luma() > light.luma())
        {
            var t = light;
            light = dark;
            dark = t;
        }

        if (this.luma() < threshold)
        {
            return light;
        } 
        else
        {
            return dark;
        }
    }

    color.prototype.hexStr = function()
    {
        // return 'rgb('+this.r+','+this.g+','+this.b+')';

        var r = this.r.toString(16),
            g = this.g.toString(16),
            b = this.b.toString(16);
        if(r.length == 1) r = '0' + r;
        if(g.length == 1) g = '0' + g;
        if(b.length == 1) b = '0' + b;

        return '#' + r + g + b;
    }

    color.prototype.isHexColor = isHexColor;

    /* helpers */
    function hexToRgb(hex)
    {
        hex = hex.toLowerCase();
        if(hex && hexReg.test(hex))
        {
            if(hex.length === 4)
            {
                var hexNew = "#";
                for(var i=1; i<4; i+=1)
                {
                    hexNew += hex.slice(i,i+1).concat(hex.slice(i,i+1));   
                }
                hex = hexNew;
            }

            //处理六位的颜色值
            var hexChange = [];
            for(var i=1; i<7; i+=2)
            {
                hexChange.push(parseInt('0x' + hex.slice(i, i + 2)));  
            }
            return {r: hexChange[0], g: hexChange[1], b: hexChange[2], a: 1};
        }
        else
        {
            throw new Error('function hexToRgb: Wrong hex string! (hex: ' + hex + ')');
        }
    }

    function isHexColor(hex)
    {
        return hex && hexReg.test($.trim(hex.toLowerCase()));
    }

    function hslToRgb(hsl)
    {
        var h = hsl.h, s = hsl.s, l = hsl.l, a = hsl.a;

        h = (number(h) % 360) / 360;
        s = clamp(number(s));
        l = clamp(number(l));
        a = clamp(number(a));

        var m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        var m1 = l * 2 - m2;

        var r =
        {
            r: hue(h + 1/3) * 255,
            g: hue(h) * 255,
            b: hue(h - 1/3) * 255,
            a: 1
        };

        return r;

        function hue(h)
        {
            h = h < 0 ? h + 1 : (h > 1 ? h - 1 : h);
            if      (h * 6 < 1) { return m1 + (m2 - m1) * h * 6; }
            else if (h * 2 < 1) { return m2; }
            else if (h * 3 < 2) { return m1 + (m2 - m1) * (2/3 - h) * 6; }
            else                { return m1; }
        }
    }

    function fit(n, end, start)
    {
        if(start == undefined) start = 0;
        if(end == undefined) end = 255;

        return Math.min(Math.max(n, start), end);
    }

    function clamp(v, max)
    {
        return fit(v, max); 
    }

    function number(n)
    {
        if(typeof(n) == 'number') return n;
        return parseFloat(n);
    }

    window.color = color;

}(window.jQuery, Math, window);
