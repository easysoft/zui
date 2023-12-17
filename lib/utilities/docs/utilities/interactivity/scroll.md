# 滚动

## 平滑滚动

使用 `scroll-smooth` 工具类来为元素应用 `scroll-behavior: smooth` 属性，指定其进行平滑滚动。

<Example background="light-circle">
  <div class="scroll-smooth overflow-auto col h-32">
    <div class="primary-pale center p-6 font-bold text-xl relative">1<input id="smoothContent1" class="opacity-0 absolute left-0 top-0"></div>
    <div class="success-pale center p-6 font-bold text-xl relative">2<input id="smoothContent2" class="opacity-0 absolute left-0 top-0"></div>
    <div class="danger-pale center p-6 font-bold text-xl relative">3<input id="smoothContent3" class="opacity-0 absolute left-0 top-0"></div>
    <div class="warning-pale center p-6 font-bold text-xl relative">4<input id="smoothContent4" class="opacity-0 absolute left-0 top-0"></div>
  </div>
  <div class="row justify-center items-center mt-2 gap-4">
    滚动到：
    <label for="smoothContent1" class="btn btn-wide">1</label>
    <label for="smoothContent2" class="btn btn-wide">2</label>
    <label for="smoothContent3" class="btn btn-wide">3</label>
    <label for="smoothContent4" class="btn btn-wide">4</label>
  </div>
</Example>

## 立即滚动

使用 `scroll-auto` 工具类来为元素应用 `scroll-behavior: auto` 属性，指定其进行立即滚动。

<Example background="light-circle">
  <div class="scroll-auto overflow-auto col h-32">
    <div class="primary-pale center p-6 font-bold text-xl relative">1<input id="autoContent1" class="opacity-0 absolute left-0 top-0"></div>
    <div class="success-pale center p-6 font-bold text-xl relative">2<input id="autoContent2" class="opacity-0 absolute left-0 top-0"></div>
    <div class="danger-pale center p-6 font-bold text-xl relative">3<input id="autoContent3" class="opacity-0 absolute left-0 top-0"></div>
    <div class="warning-pale center p-6 font-bold text-xl relative">4<input id="autoContent4" class="opacity-0 absolute left-0 top-0"></div>
  </div>
  <div class="row justify-center items-center mt-2 gap-4">
    滚动到：
    <label for="autoContent1" class="btn btn-wide">1</label>
    <label for="autoContent2" class="btn btn-wide">2</label>
    <label for="autoContent3" class="btn btn-wide">3</label>
    <label for="autoContent4" class="btn btn-wide">4</label>
  </div>
</Example>
