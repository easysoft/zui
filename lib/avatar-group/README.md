# Avatar-group 头像组

## Avatar-group
```html:example: -flex -gap-3 -items-end
<div class="avatar-group size-xs">
  <div class="avatar size-xs rounded-full"><img src="/lib/avatar/assets/avatar.png"></div>
  <div class="avatar size-xs rounded-full success">Icon</div>
  <div class="avatar size-xs rounded-full warning">+1</div>
</div>
<div class="avatar-group size-sm">
  <div class="avatar size-sm rounded-full"><img src="/lib/avatar/assets/avatar.png"></div>
  <div class="avatar size-sm rounded-full success">Icon</div>
  <div class="avatar size-sm rounded-full warning">+1</div>
</div>
<div class="avatar-group ">
  <div class="avatar rounded-full"><img src="/lib/avatar/assets/avatar.png"></div>
  <div class="avatar rounded-full success">Icon</div>
  <div class="avatar rounded-full warning">+1</div>
</div>
<div class="avatar-group size-lg">
  <div class="avatar size-lg rounded-full"><img src="/lib/avatar/assets/avatar.png"></div>
  <div class="avatar size-lg rounded-full success">Icon</div>
  <div class="avatar size-lg rounded-full warning">+1</div>
</div>
<div class="avatar-group size-xl">
  <div class="avatar size-xl rounded-full"><img src="/lib/avatar/assets/avatar.png"></div>
  <div class="avatar size-xl rounded-full success">Icon</div>
  <div class="avatar size-xl rounded-full warning">+1</div>
</div>
```

## Square

```html:example: -flex -gap-3
<div class="avatar-group">
  <div class="avatar square"><img src="/lib/avatar/assets/avatar.png"></div>
  <div class="avatar success square">Icon</div>
  <div class="avatar warning square">+1</div>
</div>
```

## Radius

```html:example: -flex -gap-3
<div class="avatar-group">
  <div class="avatar rounded-none"><img src="/lib/avatar/assets/avatar.png"></div>
  <div class="avatar success rounded-none">头像</div>
  <div class="avatar warning rounded-none">Z</div>
</div>
<div class="avatar-group">
  <div class="avatar rounded-sm"><img src="/lib/avatar/assets/avatar.png"></div>
  <div class="avatar success rounded-sm">头像</div>
  <div class="avatar warning rounded-sm">Z</div>
</div>
<div class="avatar-group">
  <div class="avatar rounded"><img src="/lib/avatar/assets/avatar.png"></div>
  <div class="avatar success rounded">头像</div>
  <div class="avatar warning rounded">Z</div>
</div>
<div class="avatar-group">
  <div class="avatar rounded-md"><img src="/lib/avatar/assets/avatar.png"></div>
  <div class="avatar success rounded-md">头像</div>
  <div class="avatar warning rounded-md">Z</div>
</div>
<div class="avatar-group">
  <div class="avatar rounded-lg"><img src="/lib/avatar/assets/avatar.png"></div>
  <div class="avatar success rounded-lg">头像</div>
  <div class="avatar warning rounded-lg">Z</div>
</div>
<div class="avatar-group">
  <div class="avatar rounded-xl"><img src="/lib/avatar/assets/avatar.png"></div>
  <div class="avatar success rounded-xl">头像</div>
  <div class="avatar warning rounded-xl">Z</div>
</div>
<div class="avatar-group">
  <div class="avatar rounded-full"><img src="/lib/avatar/assets/avatar.png"></div>
  <div class="avatar success rounded-full">头像</div>
  <div class="avatar warning rounded-full">Z</div>
</div>
```

## Stack spacing

The default stack spacing equals `gap-2.5`. A smaller `gap-*` overlaps more, a larger one overlaps less.

```html:example: -flex -gap-3 -items-end
<div class="avatar-group gap-0">
  <div class="avatar rounded-full"><img src="/lib/avatar/assets/avatar.png"></div>
  <div class="avatar rounded-full success">Icon</div>
  <div class="avatar rounded-full warning">0</div>
</div>
<div class="avatar-group gap-1">
  <div class="avatar rounded-full"><img src="/lib/avatar/assets/avatar.png"></div>
  <div class="avatar rounded-full success">Icon</div>
  <div class="avatar rounded-full warning">1</div>
</div>
<div class="avatar-group">
  <div class="avatar rounded-full"><img src="/lib/avatar/assets/avatar.png"></div>
  <div class="avatar rounded-full success">Icon</div>
  <div class="avatar rounded-full warning">2.5</div>
</div>
<div class="avatar-group gap-3.5">
  <div class="avatar rounded-full"><img src="/lib/avatar/assets/avatar.png"></div>
  <div class="avatar rounded-full success">Icon</div>
  <div class="avatar rounded-full warning">3.5</div>
</div>
```

## Ring

Each stacked child gets a ring so overlapping avatars stay separated. Override
`--avatar-group-ring-width` and `--avatar-group-ring-color` when the group sits on a
background other than the page canvas.

```html:example: -flex -gap-3 -items-end -bg-primary-500 -p-3
<div class="avatar-group">
  <div class="avatar rounded-full"><img src="/lib/avatar/assets/avatar.png"></div>
  <div class="avatar rounded-full success">Icon</div>
  <div class="avatar rounded-full warning">+1</div>
</div>
<div class="avatar-group" style="--avatar-group-ring-color: var(--color-primary-500);">
  <div class="avatar rounded-full"><img src="/lib/avatar/assets/avatar.png"></div>
  <div class="avatar rounded-full success">Icon</div>
  <div class="avatar rounded-full warning">+1</div>
</div>
<div class="avatar-group" style="--avatar-group-ring-color: var(--color-warning-500); --avatar-group-ring-width: 3px;">
  <div class="avatar rounded-full"><img src="/lib/avatar/assets/avatar.png"></div>
  <div class="avatar rounded-full success">Icon</div>
  <div class="avatar rounded-full warning">+1</div>
</div>
```
