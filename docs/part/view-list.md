section: view
id: list
description: 包含标题和简介及图片的媒体内容列表
icon: icon-list
filter: liebiao lb
---

# 列表

<style>
#pageContent .media {
  max-width: 100%;
  text-align: center;
  vertical-align: middle;
  color: #aaa;
  background-color: #eee;
  border:1px solid #ddd;
  font-size: 20px;
}
</style>

列表视图用来展示图文列表内容，该视图包含以下部分：

<table class="table">
  <tbody>
    <tr>
      <td>头部</td>
      <td>包含当前列表标题</td>
    </tr>
    <tr>
      <td>列表</td>
      <td>多个列表部分请使用`section`</td>
    </tr>
    <tr>
      <td>底部</td>
      <td>底部显示页码及其他提示信息</td>
    </tr>
  </tbody>
</table>

## 一般列表

<div contenteditable="false" spellcheck="false" class="example">
  <br>
  <ul class="breadcrumb breadcrumb-block">
    <li><i class="icon-location-arrow icon-muted"></i></li>
    <li><a href="#">Home</a></li>
    <li><a href="#">Library</a></li>
    <li class="active">Data</li>
  </ul>
  <div class="list">
    <header>
      <div class="pull-right">
        <div class="btn-group" data-toggle="buttons-radio">
          <button type="button" class="btn btn-default active"><i class="icon-th-list"></i></button>
          <button type="button" class="btn btn-default"><i class="icon-th"></i></button>
          <button type="button" class="btn btn-default"><i class="icon-th-large"></i></button>
        </div>
      </div>
      <h3><i class="icon-list-ul icon-border-circle"></i> Contents List &nbsp;<small>26 articles</small></h3>
    </header>
    <section class="items items-hover">
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><a href="###"><i class="icon-pencil"></i> edit</a> &nbsp;<a href="#"><i class="icon-remove"></i> delete</a></div>
          <h4><span class="label label-success">NEW</span>&nbsp; <a href="###">Lorem ipsum dolor sit amet.中文标题测试</a></h4>
        </div>
        <div class="item-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, necessitatibus, animi magni illo vel ducimus quia dolorum modi temporibus iste fugit laudantium minima minus sit debitis. Autem voluptate dolorum saepe!
        </div>
        <div class="item-footer">
          <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a>&nbsp;
          <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><a href="###"><i class="icon-pencil"></i> edit</a> &nbsp;<a href="#"><i class="icon-remove"></i> delete</a></div>
          <h4><a href="###">Lorem ipsum dolor sit amet.中文标题测试</a></h4>
        </div>
        <div class="item-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, necessitatibus, animi magni illo vel ducimus quia dolorum modi temporibus iste fugit laudantium minima minus sit debitis. Autem voluptate dolorum saepe!
        </div>
        <div class="item-footer">
          <a href="#"><i class="icon-comments"></i> 243</a>&nbsp;
          <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><a href="###"><i class="icon-pencil"></i> edit</a> &nbsp;<a href="#"><i class="icon-remove"></i> delete</a></div>
          <h4><a href="###">Lorem ipsum dolor sit amet.中文标题测试</a></h4>
        </div>
        <div class="item-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, necessitatibus, animi magni illo vel ducimus quia dolorum modi temporibus iste fugit laudantium minima minus sit debitis. Autem voluptate dolorum saepe!
        </div>
        <div class="item-footer">
          <a href="#"><i class="icon-comments"></i> 243</a>&nbsp;
          <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><a href="###"><i class="icon-pencil"></i> edit</a> &nbsp;<a href="#"><i class="icon-remove"></i> delete</a></div>
          <h4><a href="###">Lorem ipsum dolor sit amet.中文标题测试</a></h4>
        </div>
        <div class="item-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, necessitatibus, animi magni illo vel ducimus quia dolorum modi temporibus iste fugit laudantium minima minus sit debitis. Autem voluptate dolorum saepe!
        </div>
        <div class="item-footer">
          <a href="#"><i class="icon-comments"></i> 243</a>&nbsp;
          <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><a href="###"><i class="icon-pencil"></i> edit</a> &nbsp;<a href="#"><i class="icon-remove"></i> delete</a></div>
          <h4><a href="###">Lorem ipsum dolor sit amet.中文标题测试</a></h4>
        </div>
        <div class="item-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, necessitatibus, animi magni illo vel ducimus quia dolorum modi temporibus iste fugit laudantium minima minus sit debitis. Autem voluptate dolorum saepe!
        </div>
        <div class="item-footer">
          <a href="#"><i class="icon-comments"></i> 243</a>&nbsp;
          <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><a href="###"><i class="icon-pencil"></i> edit</a> &nbsp;<a href="#"><i class="icon-remove"></i> delete</a></div>
          <h4><a href="###">Lorem ipsum dolor sit amet.中文标题测试</a></h4>
        </div>
        <div class="item-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, necessitatibus, animi magni illo vel ducimus quia dolorum modi temporibus iste fugit laudantium minima minus sit debitis. Autem voluptate dolorum saepe!
        </div>
        <div class="item-footer">
          <a href="#"><i class="icon-comments"></i> 243</a>&nbsp;
          <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
    </section>
    <footer>
      <ul class="pager">
        <li class="previous"><a href="#">« 上一页</a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">⋯</a></li>
        <li><a href="#">6</a></li>
        <li class="active"><a href="#">7</a></li>
        <li><a href="#">8</a></li>
        <li><a href="#">9</a></li>
        <li><a href="#">⋯</a></li>
        <li><a href="#">12</a></li>
        <li class="next"><a href="#">下一页 »</a></li>
      </ul>
    </footer>
  </div>
</div>

## 更为紧凑的列表

<div contenteditable="true" spellcheck="false" class="example">
  <br>
  <ul class="breadcrumb breadcrumb-block">
    <li><i class="icon-location-arrow icon-muted"></i></li>
    <li><a href="#">Home</a></li>
    <li><a href="#">Library</a></li>
    <li class="active">Data</li>
  </ul>
  <div class="list list-condensed">
    <header>
      <div class="pull-right">
        <div class="btn-group" data-toggle="buttons-radio">
          <button type="button" class="btn btn-default active"><i class="icon-th-list"></i></button>
          <button type="button" class="btn btn-default"><i class="icon-th"></i></button>
          <button type="button" class="btn btn-default"><i class="icon-th-large"></i></button>
        </div>
      </div>
      <h3><i class="icon-list-ul icon-border-circle"></i> Contents List &nbsp;<small>26 articles</small></h3>
    </header>
    <section class="items items-hover">
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><a href="###"><i class="icon-pencil"></i> edit</a> &nbsp;<a href="#"><i class="icon-remove"></i> delete</a></div>
          <h4><span class="label label-success">NEW</span>&nbsp; <a href="###">Lorem ipsum dolor sit amet.中文标题测试</a></h4>
        </div>
        <div class="item-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, necessitatibus, animi magni illo vel ducimus quia dolorum modi temporibus iste fugit laudantium minima minus sit debitis. Autem voluptate dolorum saepe!
        </div>
        <div class="item-footer">
          <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a>&nbsp;
          <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><a href="###"><i class="icon-pencil"></i> edit</a> &nbsp;<a href="#"><i class="icon-remove"></i> delete</a></div>
          <h4><a href="###">Lorem ipsum dolor sit amet.中文标题测试</a></h4>
        </div>
        <div class="item-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, necessitatibus, animi magni illo vel ducimus quia dolorum modi temporibus iste fugit laudantium minima minus sit debitis. Autem voluptate dolorum saepe!
        </div>
        <div class="item-footer">
          <a href="#"><i class="icon-comments"></i> 243</a>&nbsp;
          <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><a href="###"><i class="icon-pencil"></i> edit</a> &nbsp;<a href="#"><i class="icon-remove"></i> delete</a></div>
          <h4><a href="###">Lorem ipsum dolor sit amet.中文标题测试</a></h4>
        </div>
        <div class="item-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, necessitatibus, animi magni illo vel ducimus quia dolorum modi temporibus iste fugit laudantium minima minus sit debitis. Autem voluptate dolorum saepe!
        </div>
        <div class="item-footer">
          <a href="#"><i class="icon-comments"></i> 243</a>&nbsp;
          <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><a href="###"><i class="icon-pencil"></i> edit</a> &nbsp;<a href="#"><i class="icon-remove"></i> delete</a></div>
          <h4><a href="###">Lorem ipsum dolor sit amet.中文标题测试</a></h4>
        </div>
        <div class="item-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, necessitatibus, animi magni illo vel ducimus quia dolorum modi temporibus iste fugit laudantium minima minus sit debitis. Autem voluptate dolorum saepe!
        </div>
        <div class="item-footer">
          <a href="#"><i class="icon-comments"></i> 243</a>&nbsp;
          <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><a href="###"><i class="icon-pencil"></i> edit</a> &nbsp;<a href="#"><i class="icon-remove"></i> delete</a></div>
          <h4><a href="###">Lorem ipsum dolor sit amet.中文标题测试</a></h4>
        </div>
        <div class="item-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, necessitatibus, animi magni illo vel ducimus quia dolorum modi temporibus iste fugit laudantium minima minus sit debitis. Autem voluptate dolorum saepe!
        </div>
        <div class="item-footer">
          <a href="#"><i class="icon-comments"></i> 243</a>&nbsp;
          <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><a href="###"><i class="icon-pencil"></i> edit</a> &nbsp;<a href="#"><i class="icon-remove"></i> delete</a></div>
          <h4><a href="###">Lorem ipsum dolor sit amet.中文标题测试</a></h4>
        </div>
        <div class="item-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, necessitatibus, animi magni illo vel ducimus quia dolorum modi temporibus iste fugit laudantium minima minus sit debitis. Autem voluptate dolorum saepe!
        </div>
        <div class="item-footer">
          <a href="#"><i class="icon-comments"></i> 243</a>&nbsp;
          <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
    </section>
    <footer>
      <ul class="pager">
        <li class="previous"><a href="#">« 上一页</a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">⋯</a></li>
        <li><a href="#">6</a></li>
        <li class="active"><a href="#">7</a></li>
        <li><a href="#">8</a></li>
        <li><a href="#">9</a></li>
        <li><a href="#">⋯</a></li>
        <li><a href="#">12</a></li>
        <li class="next"><a href="#">下一页 »</a></li>
      </ul>
    </footer>
  </div>
</div>

## 带项目缩略图

<div contenteditable="ture" spellcheck="false" class="example">
  <br>
  <ul class="breadcrumb breadcrumb-block">
    <li><i class="icon-location-arrow icon-muted"></i></li>
    <li><a href="#">Home</a></li>
    <li><a href="#">Library</a></li>
    <li class="active">Data</li>
  </ul>
  <div class="list">
    <header>
      <div class="pull-right">
        <div class="btn-group" data-toggle="buttons-radio">
          <button type="button" class="btn btn-default active"><i class="icon-th-list"></i></button>
          <button type="button" class="btn btn-default"><i class="icon-th"></i></button>
          <button type="button" class="btn btn-default"><i class="icon-th-large"></i></button>
        </div>
      </div>
      <h3><i class="icon-list-ul icon-border-circle"></i> Contents List &nbsp;<small>26 articles</small></h3>
    </header>
    <section class="items items-hover">
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><a href="###"><i class="icon-pencil"></i> edit</a> &nbsp;<a href="#"><i class="icon-remove"></i> delete</a></div>
          <h4><span class="label label-success">NEW</span>&nbsp; <a href="###">Lorem ipsum dolor sit amet.中文标题测试</a></h4>
        </div>
        <div class="item-content">
          <div class="media pull-left">
            <div class="media-place-holder" style="width:200px;height:100px;line-height:100px">200x100</div>
          </div>
          <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, necessitatibus, animi magni illo vel ducimus quia dolorum modi temporibus iste fugit laudantium minima minus sit debitis. Autem voluptate dolorum saepe!
          </div>
        </div>
        <div class="item-footer">
          <span class="label">tag1</span>
          &nbsp;
          <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a>&nbsp;
          <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><a href="###"><i class="icon-pencil"></i> edit</a> &nbsp;<a href="#"><i class="icon-remove"></i> delete</a></div>
          <h4><span class="label label-success">NEW</span>&nbsp; <a href="###">Lorem ipsum dolor sit amet.中文标题测试</a></h4>
        </div>
        <div class="item-content">
          <div class="media pull-left">
            <div class="media-place-holder" style="width:200px;height:100px;line-height:100px">200x100</div>
          </div>
          <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, necessitatibus, animi magni illo vel ducimus quia dolorum modi temporibus iste fugit laudantium minima minus sit debitis. Autem voluptate dolorum saepe!
          </div>
        </div>
        <div class="item-footer">
          <span class="label">tag1</span>
          &nbsp;
          <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a>&nbsp;
          <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><a href="###"><i class="icon-pencil"></i> edit</a> &nbsp;<a href="#"><i class="icon-remove"></i> delete</a></div>
          <h4><span class="label label-success">NEW</span>&nbsp; <a href="###">Lorem ipsum dolor sit amet.中文标题测试</a></h4>
        </div>
        <div class="item-content">
          <div class="media pull-right">
            <div class="media-place-holder" style="width:200px;height:100px;line-height:100px">200x100</div>
          </div>
          <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, necessitatibus, animi magni illo vel ducimus quia dolorum modi temporibus iste fugit laudantium minima minus sit debitis. Autem voluptate dolorum saepe!
          </div>
        </div>
        <div class="item-footer">
          <span class="label">tag1</span>
          &nbsp;
          <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a>&nbsp;
          <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><a href="###"><i class="icon-pencil"></i> edit</a> &nbsp;<a href="#"><i class="icon-remove"></i> delete</a></div>
          <h4><span class="label label-success">NEW</span>&nbsp; <a href="###">Lorem ipsum dolor sit amet.中文标题测试</a></h4>
        </div>
        <div class="item-content">
          <div class="media pull-right">
            <div class="media-place-holder" style="width:200px;height:100px;line-height:100px">200x100</div>
          </div>
          <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, necessitatibus, animi magni illo vel ducimus quia dolorum modi temporibus iste fugit laudantium minima minus sit debitis. Autem voluptate dolorum saepe!
          </div>
        </div>
        <div class="item-footer">
          <span class="label">tag1</span>
          &nbsp;
          <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a>&nbsp;
          <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><a href="###"><i class="icon-pencil"></i> edit</a> &nbsp;<a href="#"><i class="icon-remove"></i> delete</a></div>
          <h4><span class="label label-success">NEW</span>&nbsp; <a href="###">Lorem ipsum dolor sit amet.中文标题测试</a></h4>
        </div>
        <div class="item-content">
          <div class="media">
            <div class="media-place-holder" style="height:100px;line-height:100px">200x100</div>
          </div>
          <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, necessitatibus, animi magni illo vel ducimus quia dolorum modi temporibus iste fugit laudantium minima minus sit debitis. Autem voluptate dolorum saepe!
          </div>
        </div>
        <div class="item-footer">
          <span class="label">tag1</span>
          &nbsp;
          <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a>&nbsp;
          <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><a href="###"><i class="icon-pencil"></i> edit</a> &nbsp;<a href="#"><i class="icon-remove"></i> delete</a></div>
          <h4><span class="label label-success">NEW</span>&nbsp; <a href="###">Lorem ipsum dolor sit amet.中文标题测试</a></h4>
        </div>
        <div class="item-content">
          <div class="media">
            <div class="media-place-holder" style="height:100px;line-height:100px">200x100</div>
          </div>
          <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, necessitatibus, animi magni illo vel ducimus quia dolorum modi temporibus iste fugit laudantium minima minus sit debitis. Autem voluptate dolorum saepe!
          </div>
        </div>
        <div class="item-footer">
          <span class="label">tag1</span>
          &nbsp;
          <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a>&nbsp;
          <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
    </section>
    <footer>
      <ul class="pager">
        <li class="previous"><a href="#">« 上一页</a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">⋯</a></li>
        <li><a href="#">6</a></li>
        <li class="active"><a href="#">7</a></li>
        <li><a href="#">8</a></li>
        <li><a href="#">9</a></li>
        <li><a href="#">⋯</a></li>
        <li><a href="#">12</a></li>
        <li class="next"><a href="#">下一页 »</a></li>
      </ul>
    </footer>
  </div>
</div>
