function imgFill() {
    $('.imgFill').imgLiquid();
    $('.imgFill').each(function () {
    let imgUrl;
    const $this = $(this),
            $picture = $this.find('picture'),
            query = $this.data('query');
    const ww = window.innerWidth, wh = window.innerHeight;
    if ($picture.length) {
        const sourceLength = $picture.find('source').length;
        let sourceArry = [];
        $picture.find('source').each(function() {
        const srcset = $(this).attr('srcset');
        const node = $(this).attr('media').replace(/\(|\)| /g, '');
        const minmax = node.split(':')[0];
        const breakpoint = node.split(':')[1];
        sourceArry.push({
            srcset: srcset,
            minmax: minmax,
            breakpoint: breakpoint
        });
        });
        if ( query === 'size' ) {
        sourceArry.forEach(function(img) {
            if ( img.minmax === 'min-width' && ww >= parseFloat(img.breakpoint) ) {
            imgUrl = img.srcset;
            } else if ( img.minmax === 'max-width' && ww <= parseFloat(img.breakpoint) ) {
            imgUrl = img.srcset;
            }
        });
        } else if ( query === 'orientation' ) {
        sourceArry.forEach(function(img) {
            if ( img.breakpoint === 'landscape' && ww/wh > 1 ) {
            imgUrl = img.srcset;
            } else if ( img.breakpoint === 'portrait' && ww/wh <= 1 ) {
            imgUrl = img.srcset;
            }
        });
        }
        $this.css('background-image', 'url("' + imgUrl + '")');
    }
    });
}
