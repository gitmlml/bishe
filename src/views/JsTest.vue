<template>
<!--wrapper start-->
<div class="wrapper">

    <!--== Start Preloader Content ==-->
    <div class="preloader-wrap">
        <div class="preloader">
          <span class="dot"></span>
          <div class="dots">
          <span></span>
          <span></span>
          <span></span>
          </div>
        </div>
    </div>
    <!--== End Preloader Content ==-->

    <!--== Start Header Wrapper ==-->
    <header class="header-area header-default sticky-header">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-7 col-sm-4 col-md-4 col-lg-2">
            <div class="header-logo-area">
              <a href="index.html">
                <img class="logo-main" src="../assets/img/logo.png" alt="Logo" />
                <img class="logo-light" src="../assets/img/logo.png" alt="Logo" />
              </a>
            </div>
          </div>
          <div class="col-5 col-sm-8 col-md-8 col-lg-10">
            <div class="header-align">
              <div class="header-navigation-area navigation-style-two">
                <ul class="main-menu nav justify-content-center">
                  <li><a href="index.html">Home</a></li>
                  <li class="has-submenu"><a href="index.html">Pages</a>
                    <ul class="submenu-nav">
                      <li><a href="about.html">About</a></li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </li>
                  <li class="has-submenu"><a href="services.html">Services</a>
                    <ul class="submenu-nav">
                      <li><a href="services.html">Services</a></li>
                      <li><a href="service-details.html">Service Details</a></li>
                    </ul>
                  </li>
                  <li class="has-submenu"><a href="portfolio.html">Projects</a>
                    <ul class="submenu-nav">
                      <li><a href="portfolio.html">Projects</a></li>
                      <li><a href="portfolio-details.html">Projects Details</a></li>
                    </ul>
                  </li>
                  <li class="has-submenu active"><a href="blog.html">Blog</a>
                    <ul class="submenu-nav">
                      <li><a href="blog.html">Blog Grid</a></li>
                      <li><a class="text-theme-color" href="blog-details.html">Blog Single</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="header-action-area">
                <button class="btn-search">
                  <span class="icon icon-search lnr lnr-magnifier"></span>
                  <span class="icon icon-search-close lnr lnr-cross"></span>
                </button>
                <div class="btn-search-content">
                  <form action="#" method="post">
                    <div class="form-input-item">
                      <input type="text" id="search" placeholder="Search...">
                      <button type="submit" class="btn-src">
                        <i class="lnr lnr-magnifier"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <button class="btn-menu d-lg-none">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                <a class="btn-theme btn-two" href="#/">Free Consulation</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!--== End Header Wrapper ==-->

    <main class="main-content site-wrapper-reveal">
      <!--== Start Blog Area Wrapper ==-->
      <section class="blog-details-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto text-center">
              <h2 class="title">latest <span>from our blog</span></h2>
              <div class="meta">
                By
                <a class="author" href="blog.html">Admin</a>
                <a href="blog.html">28 April 2021</a>
                <a class="category" href="blog.html"><span>In</span>Google Ads</a>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid pl-0 pr-0">
          <div class="row">
            <div class="col-lg-12">
              <div class="swiper-container post-gallery-slider-container">
                <div class="swiper-wrapper post-gallery-slider">
                  <div class="swiper-slide gallery-slide-item">
                    <img class="w-100" src="..//img/blog/blog-details-01.jpg" alt="Roomedia-Blog">
                  </div>
                  <div class="swiper-slide gallery-slide-item">
                    <img class="w-100" src="../assets/img/blog/blog-details-01.jpg" alt="Roomedia-Blog">
                  </div>
                  <div class="swiper-slide gallery-slide-item">
                    <img class="w-100" src="../assets/img/blog/blog-details-01.jpg" alt="Roomedia-Blog">
                  </div>
                  <div class="swiper-slide gallery-slide-item">
                    <img class="w-100" src="../assets/img/blog/blog-details-01.jpg" alt="Roomedia-Blog">
                  </div>
                </div>
                <!-- Add Arrows -->
                <div class="swiper-button-next"><i class="lnr lnr-arrow-right"></i></div>
                <div class="swiper-button-prev"><i class="lnr lnr-arrow-left"></i></div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-10 col-xl-8 m-auto">
              <div class="post-details-content">
                <div class="post-details-body">
                  <div class="content">
                    <p class="text-pra">Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit.</span> Nulla felis risus, commo do ac facilisis nec, tristique nec massa. Sed hendrerit mi et quam accumsan laoreet id sed quam.</p>
                    <p>Fusce quis neque id lectus tempor sodales ac at nunc. Sed at vulputate lorem, non egestas mi. Sed suscipit scelerisque sollicitudin. Vivamus ut eleifend dui. Quisque feugiat, mauris nec tincidunt maximus, enim odio facilisis lectus, et accumsan dolor purus mollis turpis. Praesent posuere ultricies diam, nec auctor turpis. Vestibulum condimentum elit eget lacus molestie bibendum. Etiam ac porta lorem.</p>
                    <div class="blockquote-area">
                      <blockquote class="blockquote-style">
                        <div class="icon">
                          <img src="../assets/img/icons/right-quote.png" alt="Icon">
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel felis arcu. Integer maximus felis in massa commodo ultricies. Aenean ut enim vitae arcu iaculis euismod ac nec enim. Mauris fermentum pellentesque orci</p>
                      </blockquote>
                    </div>
                    <p class="mb-40">Praesent luctus turpis in nisi pulvinar, vestibulum fringilla felis tincidunt. Mauris placerat justo tincidunt commodo dapibus. Aliquam viverra neque tellus, non finibus sem posuere pellentesque. Ut nunc libero, hendrerit a diam eu, imperdiet pretium purus.</p>
                    <h4>Determining a Marketing Budget Can be Frustrating.</h4>
                    <p>Vivamus ac tortor non diam tincidunt tincidunt non sed dolor. Pellentesque semper ipsum venenatis diam elementum, quis molestie velit ullamcorper. Etiam condimentum maximus posuere. Phasellus et magna sapien. Vivamus sed aliquam nisl. Curabitur tincidunt eros purus, vel molestie ex malesuada non. Nulla consequat diam quis dictum feugiat.</p>
                    <ul class="list-style">
                      <li><i class="icon_box-checked"></i> Aliquam eu porta enim, a pellentesque nulla. Aliquam erat volutpat.</li>
                      <li><i class="icon_box-checked"></i> Pellentesque habitant morbi tristique senectus et netus et malesuada</li>
                      <li><i class="icon_box-checked"></i> fames ac turpis egestas. Integer id quam sit amet lorem maximus efficitur.</li>
                      <li><i class="icon_box-checked"></i> Vestibulum a enim facilisis, rutrum ex non, elementum ante.</li>
                    </ul>
                    <p class="mb-0">Ut dignissim nibh sed nisi ultrices, eu mattis nibh euismod. Proin eget euismod augue. Vestibulum nisi neque, porta a blandit ac, vestibulum convallis dui. Donec sit amet eleifend ipsum.</p>
                    <div class="widget-social-tags">
                      <div class="widget-tags">
                        <ul>
                          <li><a href="#/">Digital</a></li>
                          <li><a href="#/">Growth Hack</a></li>
                          <li><a href="#/">Business</a></li>
                        </ul>
                      </div>
                      <div class="widget-social-icons">
                        <span>Share On: </span>
                        <a class="facebook" href="#/"><i class="social_facebook"></i></a>
                        <a class="twitter" href="#/"><i class="social_twitter"></i></a>
                        <a class="dribbble" href="#/"><i class="social_dribbble"></i></a>
                        <a class="pinterest" href="#/"><i class="social_pinterest"></i></a>
                      </div>
                    </div>
                    <div class="author-info">
                      <div class="thumb">
                        <img src="../assets/img/blog/author-01.png" alt="Image">
                      </div>
                      <div class="author-details">
                        <ul>
                          <li class="name">Admin</li>
                          <li class="author">Author</li>
                        </ul>
                        <p>Admin is the founder of Yoast Academy and CEO of Yoast. Her favorite SEO topics are SEO copywriting and site structure.</p>
                      </div>
                    </div>
                  </div>
                  <div class="related-posts">
                    <h2 class="inner-title">Related Posts</h2>
                    <div class="swiper-container related-post-slider-container">
                      <!-- Add Arrows -->
                      <div class="swiper-button-next"><i class="lnr lnr-arrow-right"></i></div>
                      <div class="swiper-button-prev"><i class="lnr lnr-arrow-left"></i></div>
                      <div class="swiper-wrapper related-post-slider">
                        <!--== Start Blog Post Item ==-->
                        <div class="swiper-slide post-item">
                          <div class="thumb">
                            <a href="blog-details.html"><img src="../assets/img/blog/08.jpg" alt="Roomedia-Blog"></a>
                            <a class="icon" href="blog-details.html">
                              <i class="lnr lnr-volume-high"></i>
                            </a>
                          </div>
                          <div class="content">
                            <h4 class="title">
                              <a href="blog-details.html">Sample Articles With Long Text Lorem Ispum</a>
                            </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur cora adipiscing elit....</p>
                            <div class="meta bottom meta-bottom">
                              <div>
                                <a class="category" href="blog.html"><img class="icon-img" src="../assets/img/icons/layer.png" alt="Icon"> In <span>Business</span></a>
                                <a class="post-date" href="blog.html"><img class="icon-img" src="../assets/img/icons/calender.png" alt="Icon"> 16/4/2021</a>
                              </div>
                              <div class="post-share">
                                <a class="icon-share" href="#/"><img class="icon-img" src="../assets/img/icons/share.png" alt="Icon"></a>
                                <ul>
                                  <li><a class="color-facebook" href="#/"><i class="social_facebook"></i></a></li>
                                  <li><a class="color-twitter" href="#/"><i class="social_twitter"></i></a></li>
                                  <li><a class="color-dribbble" href="#/"><i class="social_dribbble"></i></a></li>
                                  <li><a class="color-pinterest" href="#/"><i class="social_pinterest"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--== End Blog Post Item ==-->

                        <!--== Start Blog Post Item ==-->
                        <div class="swiper-slide post-item">
                          <div class="thumb">
                            <a href="blog-details.html"><img src="../assets/img/blog/09.jpg" alt="Roomedia-Blog"></a>
                          </div>
                          <div class="content">
                            <h4 class="title">
                              <a href="blog-details.html">Sample Articles With Long Text Lorem Ispum</a>
                            </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur cora adipiscing elit. Quisque vel...</p>
                            <div class="meta bottom meta-bottom">
                              <div>
                                <a class="category" href="blog.html"><img class="icon-img" src="../assets/img/icons/layer.png" alt="Icon"> In <span>Business</span></a>
                                <a class="post-date" href="blog.html"><img class="icon-img" src="../assets/img/icons/calender.png" alt="Icon"> 16/4/2021</a>
                              </div>
                              <div class="post-share">
                                <a class="icon-share" href="#/"><img class="icon-img" src="../assets/img/icons/share.png" alt="Icon"></a>
                                <ul>
                                  <li><a class="color-facebook" href="#/"><i class="social_facebook"></i></a></li>
                                  <li><a class="color-twitter" href="#/"><i class="social_twitter"></i></a></li>
                                  <li><a class="color-dribbble" href="#/"><i class="social_dribbble"></i></a></li>
                                  <li><a class="color-pinterest" href="#/"><i class="social_pinterest"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--== End Blog Post Item ==-->

                        <!--== Start Blog Post Item ==-->
                        <div class="swiper-slide post-item">
                          <div class="thumb">
                            <a href="blog-details.html"><img src="../assets/img/blog/03.jpg" alt="Roomedia-Blog"></a>
                          </div>
                          <div class="content">
                            <h4 class="title">
                              <a href="blog-details.html">Sample Articles With Long Text Lorem Ispum</a>
                            </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur cora adipiscing elit. Quisque vel...</p>
                            <div class="meta bottom meta-bottom">
                              <div>
                                <a class="category" href="blog.html"><img class="icon-img" src="../assets/img/icons/layer.png" alt="Icon"> In <span>Business</span></a>
                                <a class="post-date" href="blog.html"><img class="icon-img" src="../assets/img/icons/calender.png" alt="Icon"> 16/4/2021</a>
                              </div>
                              <div class="post-share">
                                <a class="icon-share" href="#/"><img class="icon-img" src="../assets/img/icons/share.png" alt="Icon"></a>
                                <ul>
                                  <li><a class="color-facebook" href="#/"><i class="social_facebook"></i></a></li>
                                  <li><a class="color-twitter" href="#/"><i class="social_twitter"></i></a></li>
                                  <li><a class="color-dribbble" href="#/"><i class="social_dribbble"></i></a></li>
                                  <li><a class="color-pinterest" href="#/"><i class="social_pinterest"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--== End Blog Post Item ==-->
                      </div>
                    </div>
                  </div>
                  <div class="portfolio-navigation">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-6">
                        <div class="nav-prev">
                          <a href="blog-details.html">
                            <span><i class="lnr lnr-arrow-left"></i> Older</span>
                            Seo Explained in Fewer than <br>140 Characters
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6">
                        <div class="nav-next">
                          <a href="blog-details.html">
                            <span>Newer <i class="lnr lnr-arrow-right"></i></span>
                            The Dummies Guide to Enterprise <br>Customer Data Platforms
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="comment-area">
                    <h2 class="inner-title">02 Comments</h2>
                    <div class="comment-content">
                      <div class="single-comment">
                        <div class="author-info">
                          <div class="thumb">
                            <img src="../assets/img/blog/author-02.png" alt="Image">
                          </div>
                          <div class="author-details">
                            <ul>
                              <li class="name">Daniel Vandaft <span>-</span></li>
                              <li class="meta-date">28 Jan, 2021</li>
                            </ul>
                            <p>Ut vitae suscipit nulla, sit amet ullamcorper sapien. Nam eget quam et velit pharetra molestie tincidunt sed tortor. Aliquam neque lorem, semper non luctus eget, aliquet eu nisi.</p>
                            <a class="btn-reply" href="#/">Reply</a>
                          </div>
                        </div>
                      </div>
                      <div class="single-comment">
                        <div class="author-info">
                          <div class="thumb">
                            <img src="../assets/img/blog/author-03.png" alt="Image">
                          </div>
                          <div class="author-details">
                            <ul>
                              <li class="name">Danny Rivera <span>-</span></li>
                              <li class="meta-date">28 Jan, 2021</li>
                            </ul>
                            <p>Aliquam finibus, lectus eu tempor pretium, tellus erat sodales mauris, ac tincidunt nulla dolor a dui. Nullam pellentesque, felis hendrerit fringilla iaculis, elit ligula bibendum diam</p>
                            <a class="btn-reply" href="#/">Reply</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h2 class="inner-title pt-10">Leave a Comment</h2>
                    <div class="comment-form-wrap">
                      <div class="clearfix"></div>
                      <form action="#" method="post">
                        <div class="comment-form-content">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <input class="form-control" type="text" placeholder="Name *" required="">
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <input class="form-control" type="email" placeholder="Email *" required="">
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <input class="form-control" type="text" placeholder="Website" required="">
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <textarea class="form-control" name="comment" id="comment" cols="45" rows="7" placeholder="Your Comment *" required=""></textarea>
                              </div>
                            </div>
                          </div>
                          <div class="row pt-30">
                            <div class="col-md-12">
                              <div class="form-group mb-0">
                                <button class="btn btn-theme" type="submit">Post Comment</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--== End Blog Area Wrapper ==-->
    </main>

    <!--== Start Footer Area Wrapper ==-->
    <footer class="footer-area reveal-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-3 col-xl-3">
            <div class="widget-item mt-0">
              <div class="about-widget">
                <a class="footer-logo" href="index.html">
                  <img src="../assets/img/logo.png" alt="Logo">
                </a>
              </div>
              <div class="widget-copyright">
                <p>© <span>RooMedia</span>. <br><a target="_blank" href="https://www.yunbuluo.net/" title="网页模板">网页模板</a></p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 col-xl-4">
            <div class="widget-item sm-pl-0 pl-70">
              <h4 class="widget-title">Contact</h4>
              <ul class="widget-contact-info">
                <li class="info-address">258 Orchad St, London, United Kingdom</li>
                <li class="info-mail"><a href="mailto://hello@roomedia.com">hello@roomedia.com</a></li>
                <li class="info-phone"><a href="tel://(605)2305253">(605) 230-5253</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-10 col-lg-5 col-xl-5">
            <div class="widget-item widget-menu-wrap-item">
              <nav class="widget-menu-wrap">
                <ul class="nav-menu nav-menu-three nav">
                  <li><a href="index.html">Pages</a></li>
                  <li><a href="services.html">Services</a></li>
                  <li><a href="portfolio.html">Projects</a></li>
                  <li><a href="blog.html">Blog</a></li>
                </ul>
              </nav>
              <div class="widget-social-icons social-icons-style-three">
                <a href="#"><i class="social social_facebook"></i></a>
                <a href="#"><i class="social social_twitter"></i></a>
                <a href="#"><i class="social social_pinterest"></i></a>
                <a href="#"><i class="social social_vimeo"></i></a>
                <a href="#"><i class="social social_share"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="layer-shape">
        <img class="layer-shape-two" src="../assets/img/shape/foooter-shape-02.png" alt="Boseo-Image">
        <img class="layer-shape-one" src="../assets/img/shape/foooter-shape-01.png" alt="Boseo-Image">
      </div>
    </footer>
    <!--== End Footer Area Wrapper ==-->

    <!--== Scroll Top Button ==-->
    <div class="scroll-to-top"><span class="lnr lnr-chevron-up"></span></div>

    <!--== Start Side Menu ==-->
    <aside class="off-canvas-wrapper">
      <div class="off-canvas-inner">
        <div class="off-canvas-overlay"></div>
        <!-- Start Off Canvas Content Wrapper -->
        <div class="off-canvas-content">
          <!-- Off Canvas Header -->
          <div class="off-canvas-header">
            <div class="logo-area">
              <a href="index.html"><img src="../assets/img/logo.png" alt="Logo" /></a>
            </div>
            <div class="close-action">
              <button class="btn-close"><i class="lnr lnr-cross"></i></button>
            </div>
          </div>
          <div class="off-canvas-item">
            <!-- Start Mobile Menu Wrapper -->
            <div class="res-mobile-menu menu-active-five">
              <!-- Note Content Auto Generate By Jquery From Main Menu -->
            </div>
            <!-- End Mobile Menu Wrapper -->
          </div>
          <!-- Off Canvas Footer -->
          <div class="off-canvas-footer"></div>
        </div>
        <!-- End Off Canvas Content Wrapper -->
      </div>
    </aside>
    <!--== End Side Menu ==-->
  </div>
</template>

<script>
</script>

<style>
@import url('../assets/css/style.css');
</style>
