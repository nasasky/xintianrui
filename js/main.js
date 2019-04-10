jQuery(document).ready(function($) {
    var is_bouncy_nav_animating = false;
    //弹出菜单
    $('.cd-bouncy-nav-trigger').on('click', function() {
        triggerBouncyNav(true);
        video.style.display='none';
    });
    //关闭菜单
    $('.cd-bouncy-nav-modal .cd-close').on('click', function() {
        triggerBouncyNav(false);
    });
    $('.cd-bouncy-nav-modal').on('click', function(event) {
        if ($(event.target).is('.cd-bouncy-nav-modal')) {
            triggerBouncyNav(false);
        }
    });
    function triggerBouncyNav($bool) {
        //点击若没有动画
        if (!is_bouncy_nav_animating) {
            is_bouncy_nav_animating = true;
            //切换菜单动画
            $('.cd-bouncy-nav-modal').toggleClass('fade-in', $bool).toggleClass('fade-out', !$bool).find('li:last-child').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
                $('.cd-bouncy-nav-modal').toggleClass('is-visible', $bool);
                if (!$bool)
                    $('.cd-bouncy-nav-modal').removeClass('fade-out');
                is_bouncy_nav_animating = false;
            });
            //判断css 动画是否开启.. 
            if ($('.cd-bouncy-nav-trigger').parents('.no-csstransitions').length > 0) {
                $('.cd-bouncy-nav-modal').toggleClass('is-visible', $bool);
                is_bouncy_nav_animating = false;
            }
        }
    }
});


jQuery(document).ready(function($) {
    var is_bouncy_nav_animating = false;
    //弹出菜单
    $('.cd-bouncy-nav-triggerx').on('click', function() {
        triggerBouncyNav(true);
        video.style.display='none';
        video.pause(); 
         
    });
    //关闭菜单
    $('.cd-bouncy-nav-modalx .cd-close').on('click', function() {
        triggerBouncyNav(false);
       
        
    });
    $('.cd-bouncy-nav-modalx .gongy').on('click', function() {
        triggerBouncyNav(false);
        video.style.display='block';
        video.pause(); 
    });
    $('.cd-bouncy-nav-modalx').on('click', function(event) {
        if ($(event.target).is('.cd-bouncy-nav-modalx')) {
            triggerBouncyNav(false);
        }
    });
    function triggerBouncyNav($bool) {
        //点击若没有动画
        if (!is_bouncy_nav_animating) {
            is_bouncy_nav_animating = true;
            //切换菜单动画
            $('.cd-bouncy-nav-modalx').toggleClass('fade-in', $bool).toggleClass('fade-out', !$bool).find('li:last-child').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
                $('.cd-bouncy-nav-modalx').toggleClass('is-visible', $bool);
                if (!$bool)
                    $('.cd-bouncy-nav-modalx').removeClass('fade-out');
                is_bouncy_nav_animating = false;
            });
            //判断css 动画是否开启.. 
            if ($('.cd-bouncy-nav-triggerx').parents('.no-csstransitions').length > 0) {
                $('.cd-bouncy-nav-modalx').toggleClass('is-visible', $bool);
                is_bouncy_nav_animating = false;
            }
        }
    }
});


jQuery(document).ready(function($) {
    var is_bouncy_nav_animating = false;
    //弹出菜单
    $('.cd-bouncy-nav-triggery').on('click', function() {
        triggerBouncyNav(true);
        video.style.display='none';
        video.pause(); 
    });
    //关闭菜单
    $('.cd-bouncy-nav-modaly .cd-close').on('click', function() {
        triggerBouncyNav(false);
         video.style.display='block';
        video.pause(); 
    });
    $('.cd-bouncy-nav-modaly').on('click', function(event) {
        if ($(event.target).is('.cd-bouncy-nav-modaly')) {
            triggerBouncyNav(false);
           
        }
    });
    function triggerBouncyNav($bool) {
        //点击若没有动画
        if (!is_bouncy_nav_animating) {
            is_bouncy_nav_animating = true;
            //切换菜单动画
            $('.cd-bouncy-nav-modaly').toggleClass('fade-in', $bool).toggleClass('fade-out', !$bool).find('li:last-child').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
                $('.cd-bouncy-nav-modaly').toggleClass('is-visible', $bool);
                if (!$bool)
                    $('.cd-bouncy-nav-modaly').removeClass('fade-out');
                is_bouncy_nav_animating = false;
            });
            //判断css 动画是否开启.. 
            if ($('.cd-bouncy-nav-triggery').parents('.no-csstransitions').length > 0) {
                $('.cd-bouncy-nav-modaly').toggleClass('is-visible', $bool);
                is_bouncy_nav_animating = false;
            }
        }
    }
});