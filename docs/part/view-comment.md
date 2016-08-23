section: view
id: comment
description: 展示评论的列表视图
icon: icon-comments
filter: pinglun pl
---

# 评论

## 默认样式

<div class="example">
  <div class="comments">
    <header>
      <div class="pull-right"><a href="#commentReplyForm" class="btn btn-info"><i class="icon-comment-alt"></i> 发表评论</a></div>
      <h3><i class="icon-comments icon-border-circle"></i> 26 comments</h3>
      <div class="alert alert-info text-center">
        <a href="alert-link">3 条新的评论</a>
      </div>
    </header>
    <section class="comments-list">
      <div class="comment">
        <a href="###" class="avatar"><i class="icon-user icon-border icon-2x icon-muted"></i></a>
        <div class="content">
          <div class="pull-right"><span class="text-muted" title="2013-11-08 15:52:32">2 hours ago</span> &nbsp;<strong>#5</strong></div>
          <span class="author">
            <a href="#"><strong>Catouse</strong></a>
            <span class="text-muted"> replied to </span>
            <a href="#">Zhang Li</a>
          </span>

          <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, illo eaque a iure in quidem officiis numquam ducimus odio non. Architecto, repellendus optio maxime quae sed molestiae ipsa animi tenetur!
          </div>
          <div class="actions">
            <a href="##">reply</a>
            <a href="##">edit</a>
            <a href="##">delete</a>
          </div>
        </div>
      </div>
      <div class="comment">
        <a href="###" class="avatar"><i class="icon-user icon-border icon-2x icon-muted"></i></a>
        <div class="content">
          <div class="pull-right"><span class="text-muted">2 hours ago</span> &nbsp;<strong>#4</strong></div>
          <a href="#" class="author"><strong>Catouse</strong></a>
          <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, illo eaque a iure in quidem officiis numquam ducimus odio non. Architecto, repellendus optio maxime quae sed molestiae ipsa animi tenetur!
          </div>
          <div class="actions">
            <a href="##">reply</a>
            <a href="##">edit</a>
            <a href="##">delete</a>
          </div>
        </div>
      </div>
      <div class="comment">
        <a href="###" class="avatar"><i class="icon-user icon-border icon-2x icon-muted"></i></a>
        <div class="content">
          <div class="pull-right"><span class="text-muted">4 hours ago</span> &nbsp;<strong>#3</strong></div>
          <a href="#" class="author"><strong>Catouse</strong></a>
          <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, iusto at voluptatem quis aspernatur voluptas harum odit corporis consequatur dicta? Eos, unde, doloremque ab voluptatibus mollitia quam quas itaque quod repellendus sed optio cum blanditiis architecto excepturi quidem sint eaque.</div>
          <div class="actions">
            <a href="##">reply</a>
            <a href="##">edit</a>
            <a href="##">delete</a>
          </div>
        </div>
      </div>
      <div class="comment">
        <a href="###" class="avatar"><i class="icon-user icon-border icon-2x icon-muted"></i></a>
        <div class="content">
          <div class="pull-right"><span class="text-muted">1 days ago</span> &nbsp;<strong>#2</strong></div>
          <a href="#" class="author"><strong>Catouse</strong></a>
          <div class="text">Excepturi voluptates ea esse voluptas ad voluptate voluptatibus laboriosam velit. Totam, fuga, laboriosam, optio, qui id voluptates nam fugit quibusdam labore alias atque laudantium repudiandae veniam delectus architecto libero ducimus consequatur hic sunt ipsa. Labore, eligendi sapiente dolores quibusdam ipsum.</div>
          <div class="actions">
            <a href="##">reply</a>
            <a href="##">edit</a>
            <a href="##">delete</a>
          </div>
        </div>
      </div>
      <div class="comment">
        <a href="###" class="avatar"><i class="icon-user icon-border icon-2x icon-muted"></i></a>
        <div class="content">
          <div class="pull-right"><span class="text-muted">2 months ago</span> &nbsp;<strong>#1</strong></div>
          <a href="#" class="author"><strong>Catouse</strong></a>
          <div class="text">Assumenda, accusamus, inventore, ut, ea laboriosam quae sunt maxime labore quisquam quod nesciunt saepe quis. Debitis, fuga, ad, aut eaque vero vitae suscipit obcaecati nemo eligendi numquam id labore voluptas veniam sequi perspiciatis facilis voluptates dolorem minus quibusdam unde molestias.</div>
          <div class="actions">
            <a href="##">reply</a>
            <a href="##">edit</a>
            <a href="##">delete</a>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="reply-form" id="commentReplyForm">
        <a href="###" class="avatar"><i class="icon-user icon-border icon-2x icon-muted"></i></a>
        <div class="form">
          <form role="form">
            <div class="form-group">
              <textarea class="form-control new-comment-text" rows="2" placeholder="write a comment..."></textarea>
            </div>
            <div class="form-group comment-user" style="display:none">
              <div class="row">
                <div class="col-md-3">
                  <span class="pull-right">或者</span>
                  <a href="#">登录</a> &nbsp;<a href="##">注册</a>
                </div>
                <div class="col-md-7">
                  <div class="form-group">
                    <input type="text" class="form-control" id="nameInputEmail1" placeholder="Enter your name">
                  </div>
                  <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
                  </div>
                </div>
                <div class="col-md-2"><button type="submit" class="btn btn-block btn-primary"><i class="icon-ok"></i></button></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </footer>
  </div>
</div>

## 回复缩进

<div contenteditable="true" spellcheck="false" class="example">
  <div class="comments">
    <header>
      <div class="pull-right"><a href="#commentReplyForm" class="btn btn-info"><i class="icon-comment-alt"></i> 发表评论</a></div>
      <h3><i class="icon-comments icon-border-circle"></i> 26 comments</h3>
    </header>
    <div class="comments-list">
      <div class="comment">
        <a href="###" class="avatar"><i class="icon-user icon-border icon-2x icon-muted"></i></a>
        <div class="content">
          <div class="pull-right"><span class="text-muted">4 hours ago</span> &nbsp;<strong>#3</strong></div>
          <span class="author">
            <a href="#"><strong>Catouse</strong></a>
            <span class="text-muted"> replied to </span>
            <a href="#">Zhang Li</a>
          </span>
          <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, iusto at voluptatem quis aspernatur voluptas harum odit corporis consequatur dicta? Eos, unde, doloremque ab voluptatibus mollitia quam quas itaque quod repellendus sed optio cum blanditiis architecto excepturi quidem sint eaque.</div>
          <div class="actions">
            <a href="##">reply</a>
            <a href="##">edit</a>
            <a href="##">delete</a>
          </div>
        </div>
        <div class="comments-list">
          <div class="comment">
            <a href="###" class="avatar"><i class="icon-user icon-border icon-2x icon-muted"></i></a>
            <div class="content">
              <div class="pull-right"><span class="text-muted">4 hours ago</span> &nbsp;<strong>#3</strong></div>
              <span class="author">
                <a href="#"><strong>Catouse</strong></a>
                <span class="text-muted"> replied to </span>
                <a href="#">Zhang Li</a>
              </span>
              <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, iusto at voluptatem quis aspernatur voluptas harum odit corporis consequatur dicta? Eos, unde, doloremque ab voluptatibus mollitia quam quas itaque quod repellendus sed optio cum blanditiis architecto excepturi quidem sint eaque.</div>
              <div class="actions">
                <a href="##">reply</a>
                <a href="##">edit</a>
                <a href="##">delete</a>
              </div>
            </div>
            <div class="comments-list">
              <div class="comment">
                <a href="###" class="avatar"><i class="icon-user icon-border icon-2x icon-muted"></i></a>
                <div class="content">
                  <div class="pull-right"><span class="text-muted">4 hours ago</span> &nbsp;<strong>#3</strong></div>
                  <span class="author">
                    <a href="#"><strong>Catouse</strong></a>
                    <span class="text-muted"> replied to </span>
                    <a href="#">Zhang Li</a>
                  </span>
                  <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, iusto at voluptatem quis aspernatur voluptas harum odit corporis consequatur dicta? Eos, unde, doloremque ab voluptatibus mollitia quam quas itaque quod repellendus sed optio cum blanditiis architecto excepturi quidem sint eaque.</div>
                  <div class="actions">
                    <a href="##">reply</a>
                    <a href="##">edit</a>
                    <a href="##">delete</a>
                  </div>
                </div>
                <div class="comments-list">
                  <div class="comment">
                    <a href="###" class="avatar"><i class="icon-user icon-border icon-2x icon-muted"></i></a>
                    <div class="content">
                      <div class="pull-right"><span class="text-muted">4 hours ago</span> &nbsp;<strong>#3</strong></div>
                      <span class="author">
                        <a href="#"><strong>Catouse</strong></a>
                        <span class="text-muted"> replied to </span>
                        <a href="#">Zhang Li</a>
                      </span>
                      <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, iusto at voluptatem quis aspernatur voluptas harum odit corporis consequatur dicta? Eos, unde, doloremque ab voluptatibus mollitia quam quas itaque quod repellendus sed optio cum blanditiis architecto excepturi quidem sint eaque.</div>
                      <div class="actions">
                        <a href="##">reply</a>
                        <a href="##">edit</a>
                        <a href="##">delete</a>
                      </div>
                    </div>
                  </div>
                  <div class="comment">
                    <a href="###" class="avatar"><i class="icon-user icon-border icon-2x icon-muted"></i></a>
                    <div class="content">
                      <div class="pull-right"><span class="text-muted">4 hours ago</span> &nbsp;<strong>#3</strong></div>
                      <span class="author">
                        <a href="#"><strong>Catouse</strong></a>
                        <span class="text-muted"> replied to </span>
                        <a href="#">Zhang Li</a>
                      </span>
                      <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, iusto at voluptatem quis aspernatur voluptas harum odit corporis consequatur dicta? Eos, unde, doloremque ab voluptatibus mollitia quam quas itaque quod repellendus sed optio cum blanditiis architecto excepturi quidem sint eaque.</div>
                      <div class="actions">
                        <a href="##">reply</a>
                        <a href="##">edit</a>
                        <a href="##">delete</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="comment">
                <a href="###" class="avatar"><i class="icon-user icon-border icon-2x icon-muted"></i></a>
                <div class="content">
                  <div class="pull-right"><span class="text-muted">4 hours ago</span> &nbsp;<strong>#3</strong></div>
                  <span class="author">
                    <a href="#"><strong>Catouse</strong></a>
                    <span class="text-muted"> replied to </span>
                    <a href="#">Zhang Li</a>
                  </span>
                  <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, iusto at voluptatem quis aspernatur voluptas harum odit corporis consequatur dicta? Eos, unde, doloremque ab voluptatibus mollitia quam quas itaque quod repellendus sed optio cum blanditiis architecto excepturi quidem sint eaque.</div>
                  <div class="actions">
                    <a href="##">reply</a>
                    <a href="##">edit</a>
                    <a href="##">delete</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="comment">
        <a href="###" class="avatar"><i class="icon-user icon-border icon-2x icon-muted"></i></a>
        <div class="content">
          <div class="pull-right"><span class="text-muted">1 days ago</span> &nbsp;<strong>#2</strong></div>
          <a href="#" class="author"><strong>Catouse</strong></a>
          <div class="text">Excepturi voluptates ea esse voluptas ad voluptate voluptatibus laboriosam velit. Totam, fuga, laboriosam, optio, qui id voluptates nam fugit quibusdam labore alias atque laudantium repudiandae veniam delectus architecto libero ducimus consequatur hic sunt ipsa. Labore, eligendi sapiente dolores quibusdam ipsum.</div>
          <div class="actions">
            <a href="##">reply</a>
            <a href="##">edit</a>
            <a href="##">delete</a>
          </div>
        </div>
        <div class="comments-list">
          <div class="comment">
            <a href="###" class="avatar"><i class="icon-user icon-border icon-2x icon-muted"></i></a>
            <div class="content">
              <div class="pull-right"><span class="text-muted">4 hours ago</span> &nbsp;<strong>#3</strong></div>
              <span class="author">
                <a href="#"><strong>Catouse</strong></a>
                <span class="text-muted"> replied to </span>
                <a href="#">Zhang Li</a>
              </span>
              <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, iusto at voluptatem quis aspernatur voluptas harum odit corporis consequatur dicta? Eos, unde, doloremque ab voluptatibus mollitia quam quas itaque quod repellendus sed optio cum blanditiis architecto excepturi quidem sint eaque.</div>
              <div class="actions">
                <a href="##">reply</a>
                <a href="##">edit</a>
                <a href="##">delete</a>
              </div>
            </div>
          </div>
          <div class="comment">
            <a href="###" class="avatar"><i class="icon-user icon-border icon-2x icon-muted"></i></a>
            <div class="content">
              <div class="pull-right"><span class="text-muted">4 hours ago</span> &nbsp;<strong>#3</strong></div>
              <span class="author">
                <a href="#"><strong>Catouse</strong></a>
                <span class="text-muted"> replied to </span>
                <a href="#">Zhang Li</a>
              </span>
              <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, iusto at voluptatem quis aspernatur voluptas harum odit corporis consequatur dicta? Eos, unde, doloremque ab voluptatibus mollitia quam quas itaque quod repellendus sed optio cum blanditiis architecto excepturi quidem sint eaque.</div>
              <div class="actions">
                <a href="##">reply</a>
                <a href="##">edit</a>
                <a href="##">delete</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="comment">
        <a href="###" class="avatar"><i class="icon-user icon-border icon-2x icon-muted"></i></a>
        <div class="content">
          <div class="pull-right"><span class="text-muted">2 months ago</span> &nbsp;<strong>#1</strong></div>
          <a href="#" class="author"><strong>Catouse</strong></a>
          <div class="text">Assumenda, accusamus, inventore, ut, ea laboriosam quae sunt maxime labore quisquam quod nesciunt saepe quis. Debitis, fuga, ad, aut eaque vero vitae suscipit obcaecati nemo eligendi numquam id labore voluptas veniam sequi perspiciatis facilis voluptates dolorem minus quibusdam unde molestias.</div>
          <div class="actions">
            <a href="##">reply</a>
            <a href="##">edit</a>
            <a href="##">delete</a>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="reply-form" id="commentReplyForm">
        <a href="###" class="avatar"><i class="icon-user icon-border icon-2x icon-muted"></i></a>
        <div class="form">
          <form role="form">
            <div class="form-group">
              <textarea class="form-control new-comment-text" rows="2" placeholder="write a comment..."></textarea>
            </div>
            <div class="form-group comment-user" style="display:none">
              <div class="row">
                <div class="col-md-3">
                  <span class="pull-right">或者</span>
                  <a href="#">登录</a> &nbsp;<a href="##">注册</a>
                </div>
                <div class="col-md-7">
                  <div class="form-group">
                    <input type="text" class="form-control" id="nameInputEmail1" placeholder="Enter your name">
                  </div>
                  <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
                  </div>
                </div>
                <div class="col-md-2"><button type="submit" class="btn btn-block btn-primary"><i class="icon-ok"></i></button></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </footer>
  </div>
</div>

## 没有用户头像

直接删掉头像部分即可完美适应

<div contenteditable="true" spellcheck="false" class="example">
  <div class="comments">
    <header>
      <div class="pull-right"><a href="#commentReplyForm" class="btn btn-info"><i class="icon-comment-alt"></i> 发表评论</a></div>
      <h3><i class="icon-comments icon-border-circle"></i> 26 comments</h3>
    </header>
    <div class="comments-list">
      <div class="comment">
        <div class="content">
          <div class="pull-right"><span class="text-muted">4 hours ago</span> &nbsp;<strong>#3</strong></div>
          <span class="author">
            <a href="#"><strong>Catouse</strong></a>
            <span class="text-muted"> replied to </span>
            <a href="#">Zhang Li</a>
          </span>
          <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, iusto at voluptatem quis aspernatur voluptas harum odit corporis consequatur dicta? Eos, unde, doloremque ab voluptatibus mollitia quam quas itaque quod repellendus sed optio cum blanditiis architecto excepturi quidem sint eaque.</div>
          <div class="actions">
            <a href="##">reply</a>
            <a href="##">edit</a>
            <a href="##">delete</a>
          </div>
        </div>
        <div class="comments-list">
          <div class="comment">

            <div class="content">
              <div class="pull-right"><span class="text-muted">4 hours ago</span> &nbsp;<strong>#3</strong></div>
              <span class="author">
                <a href="#"><strong>Catouse</strong></a>
                <span class="text-muted"> replied to </span>
                <a href="#">Zhang Li</a>
              </span>
              <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, iusto at voluptatem quis aspernatur voluptas harum odit corporis consequatur dicta? Eos, unde, doloremque ab voluptatibus mollitia quam quas itaque quod repellendus sed optio cum blanditiis architecto excepturi quidem sint eaque.</div>
              <div class="actions">
                <a href="##">reply</a>
                <a href="##">edit</a>
                <a href="##">delete</a>
              </div>
            </div>
            <div class="comments-list">
              <div class="comment">

                <div class="content">
                  <div class="pull-right"><span class="text-muted">4 hours ago</span> &nbsp;<strong>#3</strong></div>
                  <span class="author">
                    <a href="#"><strong>Catouse</strong></a>
                    <span class="text-muted"> replied to </span>
                    <a href="#">Zhang Li</a>
                  </span>
                  <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, iusto at voluptatem quis aspernatur voluptas harum odit corporis consequatur dicta? Eos, unde, doloremque ab voluptatibus mollitia quam quas itaque quod repellendus sed optio cum blanditiis architecto excepturi quidem sint eaque.</div>
                  <div class="actions">
                    <a href="##">reply</a>
                    <a href="##">edit</a>
                    <a href="##">delete</a>
                  </div>
                </div>
                <div class="comments-list">
                  <div class="comment">

                    <div class="content">
                      <div class="pull-right"><span class="text-muted">4 hours ago</span> &nbsp;<strong>#3</strong></div>
                      <span class="author">
                        <a href="#"><strong>Catouse</strong></a>
                        <span class="text-muted"> replied to </span>
                        <a href="#">Zhang Li</a>
                      </span>
                      <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, iusto at voluptatem quis aspernatur voluptas harum odit corporis consequatur dicta? Eos, unde, doloremque ab voluptatibus mollitia quam quas itaque quod repellendus sed optio cum blanditiis architecto excepturi quidem sint eaque.</div>
                      <div class="actions">
                        <a href="##">reply</a>
                        <a href="##">edit</a>
                        <a href="##">delete</a>
                      </div>
                    </div>
                  </div>
                  <div class="comment">

                    <div class="content">
                      <div class="pull-right"><span class="text-muted">4 hours ago</span> &nbsp;<strong>#3</strong></div>
                      <span class="author">
                        <a href="#"><strong>Catouse</strong></a>
                        <span class="text-muted"> replied to </span>
                        <a href="#">Zhang Li</a>
                      </span>
                      <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, iusto at voluptatem quis aspernatur voluptas harum odit corporis consequatur dicta? Eos, unde, doloremque ab voluptatibus mollitia quam quas itaque quod repellendus sed optio cum blanditiis architecto excepturi quidem sint eaque.</div>
                      <div class="actions">
                        <a href="##">reply</a>
                        <a href="##">edit</a>
                        <a href="##">delete</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="comment">

                <div class="content">
                  <div class="pull-right"><span class="text-muted">4 hours ago</span> &nbsp;<strong>#3</strong></div>
                  <span class="author">
                    <a href="#"><strong>Catouse</strong></a>
                    <span class="text-muted"> replied to </span>
                    <a href="#">Zhang Li</a>
                  </span>
                  <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, iusto at voluptatem quis aspernatur voluptas harum odit corporis consequatur dicta? Eos, unde, doloremque ab voluptatibus mollitia quam quas itaque quod repellendus sed optio cum blanditiis architecto excepturi quidem sint eaque.</div>
                  <div class="actions">
                    <a href="##">reply</a>
                    <a href="##">edit</a>
                    <a href="##">delete</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="comment">
        <div class="content">
          <div class="pull-right"><span class="text-muted">1 days ago</span> &nbsp;<strong>#2</strong></div>
          <a href="#" class="author"><strong>Catouse</strong></a>
          <div class="text">Excepturi voluptates ea esse voluptas ad voluptate voluptatibus laboriosam velit. Totam, fuga, laboriosam, optio, qui id voluptates nam fugit quibusdam labore alias atque laudantium repudiandae veniam delectus architecto libero ducimus consequatur hic sunt ipsa. Labore, eligendi sapiente dolores quibusdam ipsum.</div>
          <div class="actions">
            <a href="##">reply</a>
            <a href="##">edit</a>
            <a href="##">delete</a>
          </div>
        </div>
        <div class="comments-list">
          <div class="comment">

            <div class="content">
              <div class="pull-right"><span class="text-muted">4 hours ago</span> &nbsp;<strong>#3</strong></div>
              <span class="author">
                <a href="#"><strong>Catouse</strong></a>
                <span class="text-muted"> replied to </span>
                <a href="#">Zhang Li</a>
              </span>
              <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, iusto at voluptatem quis aspernatur voluptas harum odit corporis consequatur dicta? Eos, unde, doloremque ab voluptatibus mollitia quam quas itaque quod repellendus sed optio cum blanditiis architecto excepturi quidem sint eaque.</div>
              <div class="actions">
                <a href="##">reply</a>
                <a href="##">edit</a>
                <a href="##">delete</a>
              </div>
            </div>
          </div>
          <div class="comment">

            <div class="content">
              <div class="pull-right"><span class="text-muted">4 hours ago</span> &nbsp;<strong>#3</strong></div>
              <span class="author">
                <a href="#"><strong>Catouse</strong></a>
                <span class="text-muted"> replied to </span>
                <a href="#">Zhang Li</a>
              </span>
              <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, iusto at voluptatem quis aspernatur voluptas harum odit corporis consequatur dicta? Eos, unde, doloremque ab voluptatibus mollitia quam quas itaque quod repellendus sed optio cum blanditiis architecto excepturi quidem sint eaque.</div>
              <div class="actions">
                <a href="##">reply</a>
                <a href="##">edit</a>
                <a href="##">delete</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="comment">
        <div class="content">
          <div class="pull-right"><span class="text-muted">2 months ago</span> &nbsp;<strong>#1</strong></div>
          <a href="#" class="author"><strong>Catouse</strong></a>
          <div class="text">Assumenda, accusamus, inventore, ut, ea laboriosam quae sunt maxime labore quisquam quod nesciunt saepe quis. Debitis, fuga, ad, aut eaque vero vitae suscipit obcaecati nemo eligendi numquam id labore voluptas veniam sequi perspiciatis facilis voluptates dolorem minus quibusdam unde molestias.</div>
          <div class="actions">
            <a href="##">reply</a>
            <a href="##">edit</a>
            <a href="##">delete</a>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="reply-form" id="commentReplyForm">
        <div class="form">
          <form role="form">
            <div class="form-group">
              <textarea class="form-control new-comment-text" rows="2" placeholder="write a comment..."></textarea>
            </div>
            <div class="form-group comment-user" style="display:none">
              <div class="row">
                <div class="col-md-3">
                  <span class="pull-right">或者</span>
                  <a href="#">登录</a> &nbsp;<a href="##">注册</a>
                </div>
                <div class="col-md-7">
                  <div class="form-group">
                    <input type="text" class="form-control" id="nameInputEmail1" placeholder="Enter your name">
                  </div>
                  <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
                  </div>
                </div>
                <div class="col-md-2"><button type="submit" class="btn btn-block btn-primary"><i class="icon-ok"></i></button></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </footer>
  </div>
</div>
