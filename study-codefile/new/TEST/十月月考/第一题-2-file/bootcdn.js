(function($) {

//    var libraryItemTemplate = '<a href="/{{name}}/" class="package list-group-item" target="_blank"  onclick="_hmt.push([\'_trackEvent\', \'packages\', \'click\', \'{{name}}\'])">' +
//        '<div class="row">' +
//        '<div class="col-md-3">' +
//        '<h4 class="package-name">{{name}}</h4>' +
//        '</div>' +
//        '<div class="col-md-9 hidden-xs">' +
//        '<p class="package-description">{{description}}</p>' +
//        '</div>' +
//        '</div>' +
//        '</a>';

var libraryItemTemplate = '<div class="card border-top-0 border-right-0 border-left-0">'+
  '<div class="card-header d-flex justify-content-between align-items-center border-0">'+
    '<a href="{{item_link}}" style="color:#6E1AC9;" target="_blank"><h4 style="color:#6E1AC9;">{{name}}</h4></a>'+
    '<div class="h4">'+
        '<a href="{{gh_link}}" class="text-dark px-2" target="_blank"><i class="fab fa-github"></i></a>'+
        '<a href="{{home_link}}" class="text-dark px-2" target="_blank"><i class="fas fa-home"></i></a>'+
        '<a href="{{dl_link}}" class="text-dark px-2" target="_blank"><i class="fas fa-download"></i></a>'+
    '</div>'+
  '</div>'+
  '<div class="card-body text-left">'+
    '<p class="card-title"><b>{{name}}</b>{{isPopularHtml}}'+
    '<span class="badge badge-dark-home mx-1">JS</span>'+
    '<span class="badge badge-light mx-1">版本：{{version}}</span>'+
    '<span class="badge badge-light mx-1">执照：{{license}}</span>'+
    '</p>'+
    '<p class="card-text">{{description}}</p>'+
    '<p class="card-text">{{keyword}}'+
    '</p>'+
  '</div>'+
'</div>';


    var alllibraries = [];

    if ($('.search').length > 0) {
        $.get('https://www.bootcdn.cn/assets/js/libraries-bootcss.min.json?16828525784718' + '?').done(function(libraries) {
            alllibraries = libraries;
        });
    }


    function onSearch(ev) {
        var val = $(ev.currentTarget).val();


        if (val.length > 0) {
            $('#common-packages').hide();

			var results = _.filter(alllibraries.Result, function(lib) {
				var re = new RegExp(val, "i");
				return re.test(lib.name);
			});
			
			
            if (val.length < 2) results = _.slice(results, 0, 100);

			var html = results.reduce(function(all, pkg) {
				
				var isPopularHtml = '';
				var keyword = '';
				var item_links = 'view.php?name='+pkg.name;
				

				if (pkg.isPopular === 'true') {
					isPopularHtml = '<span class="badge badge-success-home mx-1">受欢迎的</span>';
				}
				
				if (pkg.keywords && pkg.keywords.length > 0) {
					var keywordsHtml = pkg.keywords.map(function(keyword) {
						return '<span class="badge badge-pill badge-light-home">' + keyword + '</span>';
					}).join('');
					keywordsHtml += keywordsHtml;
				}				

	
				all.push(libraryItemTemplate
					.replace(/{{name}}/g, _.escape(pkg.name))
					.replace(/{{description}}/g, _.escape(pkg.description))
					.replace(/{{gh_link}}/g, _.escape(pkg.repository.url))
					.replace(/{{home_link}}/g, _.escape(pkg.homepage))
					.replace(/{{dl_link}}/g, _.escape(pkg.latest))
					.replace(/{{version}}/g, _.escape(pkg.version))
					.replace(/{{license}}/g, _.escape(pkg.license))
					.replace(/{{isPopularHtml}}/g, (isPopularHtml))
					.replace(/{{keyword}}/g, (keywordsHtml))
					.replace(/{{item_link}}/g, (item_links))
					);
				
					

				return all;
			}, []).join('');

            $('#search-results').html(html).show();
        } else {
            $('#common-packages').show();
            $('#search-results').hide();
        }

        // console.log(html);

    }


    $('.search').val('').focus();
    $('.search').on('input propertychange', _.throttle(onSearch, 60));


    $(document).on('input', '.clearable', function() {
        // $(this)[tog(this.value)]('x');

        if (!this.value) {
            $(this).next('i').removeClass('fa-close').addClass('fa-search');
        } else {
            $(this).next('i').removeClass('fa-search').addClass('fa-close x');
        }

    }).on('mousemove', '.x', function(e) {
        // $(this).addClass('onX');
        $(this).addClass('onX');
    }).on('click', '.onX', function() {
        $(this).removeClass('x onX').prev('input').val('').change();
        $(this).removeClass('fa-close').addClass('fa-search');

        $('#common-packages').show();
        $('#search-results').hide();
    });



    // back to top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 100);
        return false;
    });


    //页头背景
    try {

        if (window.location.pathname !== '/') {
            var title = $('.site-header h1').first().text();
            $('.site-header').geopattern(title /*, {color: '#27ae60'}*/ );
        }
    } catch (err) {
        console.log(err);
    }


    //协议选择按钮
    $('.btn-group .btn').click(function() {
        var $input = $('input', this);
        var protocal = $input.attr('id');

        console.log('Protocal ', protocal, ' was selected');

        if (protocal === 'relative') {
            $('.library-url').each(function() {
                var url = $(this).text();

                $(this).text(url.replace(/^https?:/i, ''));
                $(this).parent().removeClass('js-https');
            });

        } else if (protocal === 'http') {
            $('.library-url').each(function() {
                var url = $(this).text();

                $(this).text('http:' + url.replace(/^https?:/i, ''));
                $(this).parent().removeClass('js-https');
            });

        } else if (protocal === 'https') {
            $('.library-url').each(function() {
                var url = $(this).text();

                $(this).text('https:' + url.replace(/^https?:/i, ''));
                $(this).parent().addClass('js-https');
            });
        }

        localforage.setItem('protocal', protocal, function(err, value) {
            if (err) return console.log(err);

            console.log('saved protocal: ', value);
        });
    });
	
	//更换版本按钮
	$('.dmenuver a').click(function () {
		var ver = $(this).data('version')
		$('.btnVer').text(ver);
	   $(this).parents('.dropdown-menu').find('li').removeClass('active');
	   $(this).parent('li').addClass('active'); 
	   $(".packageItem").html('').load('./'+ver+"/index.html", function() {
			$(document.body).find('.library-url').each(function() {
				var btnHtml = '<div class="zero-clipboard">' +
					'<span class="btn-clipboard btn-clipboard-link" title="复制到剪贴板"><i class="fa fa-link"></i> 复制链接</span>' +
					'</div>';
				var btnsScript = '<div class="zero-clipboard">' +
					'<span class="btn-clipboard btn-clipboard-code" title="复制到剪贴板"><i class="fa fa-code"></i> 复制 &lt;script&gt; 标签</span>' +
					'<span class="btn-clipboard btn-clipboard-link" title="复制到剪贴板"><i class="fa fa-link"></i> 复制链接</span>' +
					'</div>';
				var btnsLink = '<div class="zero-clipboard">' +
					'<span class="btn-clipboard btn-clipboard-code" title="复制到剪贴板"><i class="fa fa-code"></i> 复制 &lt;link&gt; 标签</span>' +
					'<span class="btn-clipboard btn-clipboard-link" title="复制到剪贴板"><i class="fa fa-link"></i> 复制链接</span>' +
					'</div>';
				var url = $(this).text();

				if (/\.css$/.test(url)) {
					$(this).before(btnsLink);
				} else if (/\.js$/.test(url)) {
					$(this).before(btnsScript);
				} else {
					$(this).before(btnHtml);
				}

			});
		});
	   


	});
	//更换文件按钮
	$('.dmenufile a').click(function () {
		var filetype = $(this).data('filetype');
		$('.btnFile').text(filetype);
		$(this).parents('.dropdown-menu').find('li').removeClass('active');
		$(this).parent('li').addClass('active');

		var listItems = $(".file-items li");
		listItems.show(); // Display all list items by default

		if (filetype !== '全部') {
			listItems.each(function(idx, li) {
				var liFileType = $(this).data('filetype');
				if (filetype !== liFileType) {
					$(this).hide();
				}
			});
		}
		console.log('clicked: '+filetype);
	});

    //页面加载后自动获取本地存储的协议设置
    // localforage.getItem('protocal', function(err, protocal) {
    //     if (err) {
    //         console.log(err);
    //     };

    //     if (!protocal) protocal = 'https';

    //     if (protocal) {
    //         console.log('Get protocal: ', protocal);

    //         $('#' + protocal).parent().button('toggle');

    //         if (protocal === 'relative') {
    //             $('.library-url').each(function() {
    //                 var url = $(this).text();

    //                 $(this).text(url.replace(/^https?:/i, ''));
    //                 $(this).parent().removeClass('js-https');
    //             });

    //         } else if (protocal === 'http') {
    //             $('.library-url').each(function() {
    //                 var url = $(this).text();

    //                 $(this).text('http:' + url.replace(/^https?:/i, ''));
    //                 $(this).parent().removeClass('js-https');
    //             });

    //         } else if (protocal === 'https') {
    //             $('.library-url').each(function() {
    //                 var url = $(this).text();

    //                 $(this).text('https:' + url.replace(/^https?:/i, ''));
    //                 $(this).parent().addClass('js-https');
    //             });
    //         }
    //     }
    // });
	
    // Insert copy to clipboard button each resource link
    $('.library-url').each(function() {
        var btnHtml = '<div class="zero-clipboard float-right">' +
            '<span class="btn-clipboard btn-clipboard-link badge badge-dark-home mx-1" title="复制到剪贴板"><i class="fa fa-link"></i> 复制链接</span>' +
            '</div>';
        var btnsScript = '<div class="zero-clipboard float-right">' +
            '<span class="btn-clipboard btn-clipboard-code badge badge-dark-home mx-1" title="复制到剪贴板"><i class="fa fa-code"></i> 复制 &lt;script&gt; 标签</span>' +
            '<span class="btn-clipboard btn-clipboard-link badge badge-dark-home mx-1" title="复制到剪贴板"><i class="fa fa-link"></i> 复制链接</span>' +
            '</div>';
        var btnsLink = '<div class="zero-clipboard float-right">' +
            '<span class="btn-clipboard btn-clipboard-code badge badge-dark-home mx-1" title="复制到剪贴板"><i class="fa fa-code"></i> 复制 &lt;link&gt; 标签</span>' +
            '<span class="btn-clipboard btn-clipboard-link badge badge-dark-home mx-1" title="复制到剪贴板"><i class="fa fa-link"></i> 复制链接</span>' +
            '</div>';
        var url = $(this).text();

        if (/\.css$/.test(url)) {
            $(this).before(btnsLink);
        } else if (/\.js$/.test(url)) {
            $(this).before(btnsScript);
        } else {
            $(this).before(btnHtml);
        }

    });

    $('.btn-clipboard').tooltip({
        container: 'body'
    });


    var clipboard = new Clipboard('.btn-clipboard', {
        text: function(trigger) {
            var $trigger = $(trigger);
            var $target = $(trigger.parentNode.nextElementSibling);
            var str = url = $target.text();

            if ($trigger.hasClass('btn-clipboard-code')) {
                if (/\.css$/.test(url)) {
                    str = '<link href="' + url + '" rel="stylesheet">';
                } else if (/\.js$/.test(url)) {
                    str = '<script src="' + url + '"></script>';
                }
            }

            return str;
        }
    })

    clipboard.on('success', function(e) {
        $(e.trigger)
            .attr('title', '已复制！')
            .tooltip('show');
        $(e.trigger)
            .attr('data-original-title', '已复制！')
            .tooltip('show');
        e.clearSelection()
    })

    clipboard.on('error', function(e) {
        var modifierKey = /Mac/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl-'
        var fallbackMsg = 'Press ' + modifierKey + 'C to copy'

        $(e.trigger)
            .attr('title', fallbackMsg)
            .tooltip('show')
            .attr('title', '复制到剪贴板')
    })

	 $('.btn-clipboard').mouseleave(function (e) {

			$(this).attr('title', '复制到剪贴板');
			$(this).attr('data-original-title', '复制到剪贴板');
		 }
	 )



    function selectText(element) {
        var doc = document;
        var text = element;

        if (doc.body.createTextRange) { // ms
            var range = doc.body.createTextRange();
            range.moveToElementText(text);
            range.select();
        } else if (window.getSelection) { // moz, opera, webkit
            var selection = window.getSelection();
            var range = doc.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }

    function prepareLibrarySelection() {
        $('.library').on('mouseenter', function(event) {
            var url = $('library-url', this).text();

            selectText($(event.currentTarget)[0]);
        }).on('mouseleave', function(event) {

        });
    }	
})(jQuery);