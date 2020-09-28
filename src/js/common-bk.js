(function($){
    $.fn.common = function(){
        this.each(function(index){
            var common = new Common(this);
        })
        return this;
    }
})(jQuery)

function commonInit(selector){

    $(selector).common();
}

function Common(selector){
	this.$selector = null;
	this._init(selector);
    this._iniEvent();
}
Common.prototype._init = function(selector) {
    this.$selector = $(selector);
    this.$bgChange = this.$selector.find('.js-bgChange');
    this.$slider = this.$selector.find('.js-slider');
    this.$layer = this.$selector.find('.js-layer');
    this.$progressBar = this.$selector.find('.js-progressBar');
    this.$link = this.$selector.find('.jLink');
    this.$careerScrollS = this.$selector.find('.career-scroll1');
    this.$careerScrollE = this.$selector.find('.career-scroll3');
    this.$careerScrollBar = this.$selector.find('.career-scrollBar');
    this.$btnTop = this.$selector.find('.btn-top');
    this.$designIs = this.$selector.find('#designIs');
    this.$process = this.$selector.find('#process');
    this.$career = this.$selector.find('#career');
    this.$portfolio = this.$selector.find('#portfolio');
}
Common.prototype._iniEvent = function() {
    var objThis = this;
    $(window).on({
        scroll:function(e){    
            var windowScrollTop = $(window).scrollTop();     
            var htmlScrollTop = $('html').scrollTop();   
            if((objThis.$bgChange.offset().top + (objThis.$bgChange.height()/1.5)) <= (windowScrollTop)){
                $('html').addClass('bg-change')
            }else{
                $('html').removeClass('bg-change')
            }

            var winScroll = windowScrollTop || htmlScrollTop;
            var scrollHeight = $('html').prop("scrollHeight");
            var clientHeight = $('html').prop("clientHeight");
            var scrolled = winScroll/(scrollHeight - clientHeight) * 100;
            // console.log(windowScrollTop, htmlScrollTop, scrollHeight ,  clientHeight, scrolled)
            $(objThis.$progressBar.find('.bg-mark')).css({
                'width':scrolled+"%"
            })

                // console.log($(objThis.$careerScrollS).scrollTop())
                // console.log($(objThis.$careerScrollE).scrollTop())
                // console.log(htmlScrollTop)
                // console.log('position',$(objThis.$careerScrollS).position().top)
            if($(objThis.$careerScrollS).offset().top<windowScrollTop && $(objThis.$careerScrollE).offset().top>windowScrollTop){
                // console.log('S',$(objThis.$careerScrollS).offset().top)
                // console.log('E',$(objThis.$careerScrollE).offset().top)
                // console.log('htmlScrollTop',htmlScrollTop)
                var distance = $(objThis.$careerScrollS).offset().top - $(objThis.$careerScrollE).offset().top;
                distance = Math.abs(distance)
                
                // console.log('distance',distance)
                var from = windowScrollTop - $(objThis.$careerScrollS).offset().top;
                from = Math.abs(from);
                // console.log('from',from)
                var scrolled = from * .1;
                objThis.$careerScrollBar.css({
                    'height': scrolled+"%"
                })
            }
            // btnTop
            if(objThis.$designIs.height()<htmlScrollTop){
                objThis.$btnTop.css({
                    'opacity':'1'
                })
            }else{
                objThis.$btnTop.css({
                    'opacity':'0'
                })
            }
            
            
        }
    })
    this.$slider.on({
        click:function(e){
            e.preventDefault();
            objThis._slideOpen($(this));
        }
    })
    this.$layer.on({
        click:function(e){
            e.preventDefault();
            objThis._slideClose($(this));

        }
    })
    this.$link.on({
        click:function(e){
            e.preventDefault();
            var link = $(this).data('link');
            $('html, body').animate({
                scrollTop: $("[data-name='"+link+"']").offset().top
            }, 500);
        }
    })
    this.$btnTop.on({
        click:function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        }
    })

    
}
Common.prototype._slideOpen = function(tar) {
    var target = tar.data('target');
    var obj = $('[data-name='+target+']').find('.bg-light');
    $('[data-name='+target+']').stop().animate({
        opacity:1
    },'slow')
    $(obj).stop().animate({
        right:0+'px'
    },'slow')
    $('[data-name='+target+']').css({
        'display':'block'
    })
    $('body').css({
        'overflow':'hidden'
    })
}
Common.prototype._slideClose = function(tar) {
    var width = $(tar).find('.bg-light').width();
    tar.stop().animate({
        opacity:0
    },'slow');
    tar.find('.bg-light').stop().animate({
        right:-width+'px'

    },'slow');
    $('body').css({
        'overflow':'auto'
    });
    setTimeout(() => {tar.hide()}
    ,300);
}