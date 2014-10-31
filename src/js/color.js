/* ========================================================================
 * ZUI: color.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($, Math, window){
    'use strict';

    var hexReg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    var namedColors = {
        aliceblue: '#f0f8ff',
        antiquewhite: '#faebd7',
        aqua: '#00ffff',
        aquamarine: '#7fffd4',
        azure: '#f0ffff',
        beige: '#f5f5dc',
        bisque: '#ffe4c4',
        black: '#000000',
        blanchedalmond: '#ffebcd',
        blue: '#0000ff',
        blueviolet: '#8a2be2',
        brown: '#a52a2a',
        burlywood: '#deb887',
        cadetblue: '#5f9ea0',
        chartreuse: '#7fff00',
        chocolate: '#d2691e',
        coral: '#ff7f50',
        cornflowerblue: '#6495ed',
        cornsilk: '#fff8dc',
        crimson: '#dc143c',
        cyan: '#00ffff',
        darkblue: '#00008b',
        darkcyan: '#008b8b',
        darkgoldenrod: '#b8860b',
        darkgray: '#a9a9a9',
        darkgreen: '#006400',
        darkkhaki: '#bdb76b',
        darkmagenta: '#8b008b',
        darkolivegreen: '#556b2f',
        darkorange: '#ff8c00',
        darkorchid: '#9932cc',
        darkred: '#8b0000',
        darksalmon: '#e9967a',
        darkseagreen: '#8fbc8f',
        darkslateblue: '#483d8b',
        darkslategray: '#2f4f4f',
        darkturquoise: '#00ced1',
        darkviolet: '#9400d3',
        deeppink: '#ff1493',
        deepskyblue: '#00bfff',
        dimgray: '#696969',
        dodgerblue: '#1e90ff',
        firebrick: '#b22222',
        floralwhite: '#fffaf0',
        forestgreen: '#228b22',
        fuchsia: '#ff00ff',
        gainsboro: '#dcdcdc',
        ghostwhite: '#f8f8ff',
        gold: '#ffd700',
        goldenrod: '#daa520',
        gray: '#808080',
        green: '#008000',
        greenyellow: '#adff2f',
        honeydew: '#f0fff0',
        hotpink: '#ff69b4',
        indianred: '#cd5c5c',
        indigo: '#4b0082',
        ivory: '#fffff0',
        khaki: '#f0e68c',
        lavender: '#e6e6fa',
        lavenderblush: '#fff0f5',
        lawngreen: '#7cfc00',
        lemonchiffon: '#fffacd',
        lightblue: '#add8e6',
        lightcoral: '#f08080',
        lightcyan: '#e0ffff',
        lightgoldenrodyellow: '#fafad2',
        lightgray: '#d3d3d3',
        lightgreen: '#90ee90',
        lightpink: '#ffb6c1',
        lightsalmon: '#ffa07a',
        lightseagreen: '#20b2aa',
        lightskyblue: '#87cefa',
        lightslategray: '#778899',
        lightsteelblue: '#b0c4de',
        lightyellow: '#ffffe0',
        lime: '#00ff00',
        limegreen: '#32cd32',
        linen: '#faf0e6',
        magenta: '#ff00ff',
        maroon: '#800000',
        mediumaquamarine: '#66cdaa',
        mediumblue: '#0000cd',
        mediumorchid: '#ba55d3',
        mediumpurple: '#9370db',
        mediumseagreen: '#3cb371',
        mediumslateblue: '#7b68ee',
        mediumspringgreen: '#00fa9a',
        mediumturquoise: '#48d1cc',
        mediumvioletred: '#c71585',
        midnightblue: '#191970',
        mintcream: '#f5fffa',
        mistyrose: '#ffe4e1',
        moccasin: '#ffe4b5',
        navajowhite: '#ffdead',
        navy: '#000080',
        oldlace: '#fdf5e6',
        olive: '#808000',
        olivedrab: '#6b8e23',
        orange: '#ffa500',
        orangered: '#ff4500',
        orchid: '#da70d6',
        palegoldenrod: '#eee8aa',
        palegreen: '#98fb98',
        paleturquoise: '#afeeee',
        palevioletred: '#db7093',
        papayawhip: '#ffefd5',
        peachpuff: '#ffdab9',
        peru: '#cd853f',
        pink: '#ffc0cb',
        plum: '#dda0dd',
        powderblue: '#b0e0e6',
        purple: '#800080',
        red: '#ff0000',
        rosybrown: '#bc8f8f',
        royalblue: '#4169e1',
        saddlebrown: '#8b4513',
        salmon: '#fa8072',
        sandybrown: '#f4a460',
        seagreen: '#2e8b57',
        seashell: '#fff5ee',
        sienna: '#a0522d',
        silver: '#c0c0c0',
        skyblue: '#87ceeb',
        slateblue: '#6a5acd',
        slategray: '#708090',
        snow: '#fffafa',
        springgreen: '#00ff7f',
        steelblue: '#4682b4',
        tan: '#d2b48c',
        teal: '#008080',
        thistle: '#d8bfd8',
        tomato: '#ff6347',
        turquoise: '#40e0d0',
        violet: '#ee82ee',
        wheat: '#f5deb3',
        white: '#ffffff',
        whitesmoke: '#f5f5f5',
        yellow: '#ffff00',
        yellowgreen: '#9acd32'
    };

    /* color */
    var Color = function(r, g, b, a)
    {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 1;

        if (a !== undefined) this.a = clamp(number(a), 1);

        if (r !== undefined && g !== undefined && b !== undefined)
        {
            this.r = parseInt(clamp(number(r), 255));
            this.g = parseInt(clamp(number(g), 255));
            this.b = parseInt(clamp(number(b), 255));
        }
        else if (r !== undefined)
        {
            var type = typeof(r);
            if (type == 'string')
            {
                r = r.toLowerCase();
                if (r === 'transparent')
                {
                    this.a = 0;
                }
                else if (namedColors[r])
                {
                    this.rgb(hexToRgb(namedColors[r]));
                }
                else
                {
                    this.rgb(hexToRgb(r));
                }
            }
            else if (type == 'number' && g === undefined)
            {
                this.r = parseInt(clamp(r, 255));
                this.g = this.r;
                this.b = this.r;
            }
            else if (type == 'object' && r.hasOwnProperty('r'))
            {
                this.r = parseInt(clamp(number(r.r), 255));
                if (r.hasOwnProperty('g')) this.g = parseInt(clamp(number(r.g), 255));
                if (r.hasOwnProperty('b')) this.b = parseInt(clamp(number(r.b), 255));
                if (r.hasOwnProperty('a')) this.a = clamp(number(r.a), 1);
            }
            else if (type == 'object' && r.hasOwnProperty('h'))
            {
                var hsl = {
                    h: clamp(number(r.h), 360),
                    s: 1,
                    l: 1,
                    a: 1
                };
                if (r.hasOwnProperty('s')) hsl.g = clamp(number(r.s), 255);
                if (r.hasOwnProperty('l')) hsl.b = clamp(number(r.l), 255);
                if (r.hasOwnProperty('a')) hsl.a = clamp(number(r.a), 1);

                this.rgb(hslToRgb(hsl));
            }
        }
    };

    Color.prototype.rgb = function(rgb)
    {
        if (rgb !== undefined)
        {
            if (typeof(rgb) == 'object')
            {
                if (rgb.hasOwnProperty('r')) this.r = parseInt(clamp(number(rgb.r), 255));
                if (rgb.hasOwnProperty('g')) this.g = parseInt(clamp(number(rgb.g), 255));
                if (rgb.hasOwnProperty('b')) this.b = parseInt(clamp(number(rgb.b), 255));
                if (rgb.hasOwnProperty('a')) this.a = clamp(number(rgb.a), 1);
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
        else return {
            r: this.r,
            g: this.g,
            b: this.b,
            a: this.a
        };
    };

    Color.prototype.hue = function(hue)
    {
        var hsl = this.toHsl();

        if (hue === undefined) return hsl.h;
        else
        {
            hsl.h = clamp(number(hue), 360);
            this.rgb(hslToRgb(hsl));

            return this;
        }
    };

    Color.prototype.darken = function(amount)
    {
        var hsl = this.toHsl();

        hsl.l -= amount / 100;
        hsl.l = clamp(hsl.l, 1);

        this.rgb(hslToRgb(hsl));
        return this;
    };

    Color.prototype.clone = function()
    {
        return new Color(this.r, this.g, this.b, this.a);
    };

    Color.prototype.lighten = function(amount)
    {
        return this.darken(-amount);
    };

    Color.prototype.fade = function(amount)
    {
        this.a = clamp(amount / 100, 1);

        return this;
    };

    Color.prototype.spin = function(amount)
    {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;

        hsl.h = hue < 0 ? 360 + hue : hue;
        this.rgb(hslToRgb(hsl));

        return this;
    };

    Color.prototype.toHsl = function()
    {
        var r = this.r / 255,
            g = this.g / 255,
            b = this.b / 255,
            a = this.a;

        var max = Math.max(r, g, b),
            min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2,
            d = max - min;

        if (max === min)
        {
            h = s = 0;
        }
        else
        {
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

            switch (max)
            {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return {
            h: h * 360,
            s: s,
            l: l,
            a: a
        };
    };

    Color.prototype.luma = function()
    {
        var r = this.r / 255,
            g = this.g / 255,
            b = this.b / 255;

        r = (r <= 0.03928) ? r / 12.92 : Math.pow(((r + 0.055) / 1.055), 2.4);
        g = (g <= 0.03928) ? g / 12.92 : Math.pow(((g + 0.055) / 1.055), 2.4);
        b = (b <= 0.03928) ? b / 12.92 : Math.pow(((b + 0.055) / 1.055), 2.4);

        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    Color.prototype.saturate = function(amount)
    {
        var hsl = this.toHsl();

        hsl.s += amount / 100;
        hsl.s = clamp(hsl.s);

        this.rgb(hslToRgb(hsl));

        return this;
    };

    Color.prototype.desaturate = function(amount)
    {
        return this.saturate(-amount);
    };

    Color.prototype.contrast = function(dark, light, threshold)
    {
        if (typeof light === 'undefined') light = new Color(255, 255, 255, 1);
        else light = new Color(light);
        if (typeof dark === 'undefined') dark = new Color(0, 0, 0, 1);
        else dark = new Color(dark);

        if (this.a < 0.5) return dark;

        if (threshold === undefined) threshold = 0.43;
        else threshold = number(threshold);

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
    };

    Color.prototype.hexStr = function()
    {
        var r = this.r.toString(16),
            g = this.g.toString(16),
            b = this.b.toString(16);
        if (r.length == 1) r = '0' + r;
        if (g.length == 1) g = '0' + g;
        if (b.length == 1) b = '0' + b;

        return '#' + r + g + b;
    };

    Color.prototype.toCssStr = function()
    {
        if (this.a > 0)
        {
            if (this.a < 1)
            {
                return 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a + ')';
            }
            else
            {
                return this.hexStr();
            }
        }
        else
        {
            return 'transparent';
        }
    };

    Color.prototype.isColor = isColor;

    /* helpers */
    function hexToRgb(hex)
    {
        hex = hex.toLowerCase();
        if (hex && hexReg.test(hex))
        {
            var i;
            if (hex.length === 4)
            {
                var hexNew = '#';
                for (i = 1; i < 4; i += 1)
                {
                    hexNew += hex.slice(i, i + 1).concat(hex.slice(i, i + 1));
                }
                hex = hexNew;
            }

            var hexChange = [];
            for (i = 1; i < 7; i += 2)
            {
                hexChange.push(parseInt('0x' + hex.slice(i, i + 2)));
            }
            return {
                r: hexChange[0],
                g: hexChange[1],
                b: hexChange[2],
                a: 1
            };
        }
        else
        {
            throw new Error('function hexToRgb: Wrong hex string! (hex: ' + hex + ')');
        }
    }

    function isColor(hex)
    {
        return typeof(hex) === 'string' && (hex.toLowerCase() === 'transparent' || namedColors[hex.toLowerCase()] || hexReg.test($.trim(hex.toLowerCase())));
    }

    function hslToRgb(hsl)
    {
        var h = hsl.h,
            s = hsl.s,
            l = hsl.l,
            a = hsl.a;

        h = (number(h) % 360) / 360;
        s = clamp(number(s));
        l = clamp(number(l));
        a = clamp(number(a));

        var m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        var m1 = l * 2 - m2;

        var r = {
            r: hue(h + 1 / 3) * 255,
            g: hue(h) * 255,
            b: hue(h - 1 / 3) * 255,
            a: 1
        };

        return r;

        function hue(h)
        {
            h = h < 0 ? h + 1 : (h > 1 ? h - 1 : h);
            if (h * 6 < 1)
            {
                return m1 + (m2 - m1) * h * 6;
            }
            else if (h * 2 < 1)
            {
                return m2;
            }
            else if (h * 3 < 2)
            {
                return m1 + (m2 - m1) * (2 / 3 - h) * 6;
            }
            else
            {
                return m1;
            }
        }
    }

    function fit(n, end, start)
    {
        if (start === undefined) start = 0;
        if (end === undefined) end = 255;

        return Math.min(Math.max(n, start), end);
    }

    function clamp(v, max)
    {
        return fit(v, max);
    }

    function number(n)
    {
        if (typeof(n) == 'number') return n;
        return parseFloat(n);
    }

    window.Color = Color;

}(jQuery, Math, window));
