(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,s=i(a("PJYZ")),n=i(a("VbXa")),o=i(a("8OQS")),l=i(a("pVnL")),d=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},A=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},f=Object.create({}),g=function(e){var t=u(e),a=A(t);return f[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,m=h&&window.IntersectionObserver,b=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,s=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},i&&d.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:s}),d.default.createElement("source",{media:r,srcSet:a,sizes:s}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function v(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function w(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,s=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+d+n+o+a+i+t+s+r+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,s=d.default.createElement(B,(0,l.default)({src:t},r));return a.length>1?d.default.createElement("picture",null,i(a),s):s},B=d.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,s=e.style,n=e.onLoad,c=e.onError,u=e.loading,A=e.draggable,f=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},f,{onLoad:n,onError:c,ref:t,loading:u,draggable:A,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));B.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!p&&m&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||h&&(p||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)(a)),a.handleRef=a.handleRef.bind((0,s.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=A(t),f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,o=void 0===n?{}:n,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,g=e.fluid,p=e.fixed,h=e.backgroundColor,m=e.durationFadeIn,b=e.Tag,E=e.itemProp,w=e.loading,j=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,Q=(0,l.default)({opacity:L?1:0,transition:R?"opacity "+m+"ms":"none"},o),C="boolean"==typeof h?"lightgray":h,N={transitionDelay:m+"ms"},x=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&N,{},o,{},A),P={title:t,alt:this.state.isVisible?"":a,style:x,className:f,itemProp:E};if(g){var z=g,V=z[0];return d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),C&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&N)}),V.base64&&d.default.createElement(O,{src:V.base64,spreadProps:P,imageVariants:z,generateSources:v}),V.tracedSVG&&d.default.createElement(O,{src:V.tracedSVG,spreadProps:P,imageVariants:z,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(z),d.default.createElement(B,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:Q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:w},V,{imageVariants:z}))}}))}if(p){var G=p,F=G[0],M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:F.width,height:F.height},s);return"inherit"===s.display&&delete M.display,d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(F.srcSet)},C&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:C,width:F.width,opacity:this.state.imgLoaded?0:1,height:F.height},R&&N)}),F.base64&&d.default.createElement(O,{src:F.base64,spreadProps:P,imageVariants:G,generateSources:v}),F.tracedSVG&&d.default.createElement(O,{src:F.tracedSVG,spreadProps:P,imageVariants:G,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(G),d.default.createElement(B,{alt:a,title:t,width:F.width,height:F.height,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:Q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:w},F,{imageVariants:G}))}}))}return null},t}(d.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),Q=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});L.propTypes={resolutions:R,sizes:Q,fixed:c.default.oneOfType([R,c.default.arrayOf(R)]),fluid:c.default.oneOfType([Q,c.default.arrayOf(Q)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var C=L;t.default=C},OGtf:function(e,t,a){var i=a("XKFU"),r=a("eeVq"),s=a("vhPU"),n=/"/g,o=function(e,t,a,i){var r=String(s(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(i).replace(n,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t);var i=a("k+YZ"),r=a("9eSz"),s=a.n(r),n=a("txSG"),o=a("Bl7J"),l=a("vrFN"),d=function(e){var t=e.height,a=e.color;return Object(n.b)("div",{style:{height:t+"px",backgroundColor:a}})},c=function(e){var t=e.style,a=i.data;return Object(n.b)(s.a,{style:t,fluid:a.placeholderImage.childImageSharp.fluid})};t.default=function(){return Object(n.b)(o.a,null,Object(n.b)(l.a,{title:"Home"})," ",Object(n.b)("main",{sx:{m:["0 3% 0 3%","0 7% 0 7%","0 15% 0 15%"],textAlign:"justify"}},Object(n.b)("h4",null,"<home>"),Object(n.b)(d,{height:"1",color:"#777"}),Object(n.b)("p",null,"I'm an 18 year old student, currently attending Crossley Heath 6ᵗʰ Form where I study Computer Science, Photography, Psychology, and English Literature. Outside of school I enjoy tinkering with electronics, programming, experimenting with Photoshop & image manipulation, as well as shooting stills / photography. I shoot all my photos on a Panasonic DMC-G7 w/ 14-42mm lens & 10mm ext. tube for macro shots."),Object(n.b)(c,{style:{height:"18em",opacity:"75%"}}),Object(n.b)("p",null,"Ut gravida sem ac scelerisque varius. Mauris convallis, justo et faucibus hendrerit, arcu turpis viverra ipsum, vitae vulputate velit turpis quis nisl. Maecenas nisl sapien, volutpat at scelerisque ac, convallis et nulla. Praesent venenatis nulla eget eros placerat, quis mollis est tempus. Proin dignissim ex interdum orci blandit, sed sollicitudin velit iaculis."),Object(n.b)("p",null,"Curabitur blandit dictum nulla, eget facilisis nisl viverra at. Maecenas neque diam, imperdiet non libero vel, gravida posuere massa. Integer auctor, felis sed feugiat ultricies, sem odio luctus purus, in lobortis dolor leo at lorem. Aenean feugiat tempor vehicula.")))}},"k+YZ":function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGMY9M0rF//xAAbEAACAwADAAAAAAAAAAAAAAABAgADEhETIf/aAAgBAQABBQKpuGtduzRiX+sFmQJ//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGhAAAgIDAAAAAAAAAAAAAAAAACEBMQIyQf/aAAgBAQAGPwJWSzprA8Sj/8QAGhABAAIDAQAAAAAAAAAAAAAAAQARITFRgf/aAAgBAQABPyFdG3ZsMTGJblV7GoNnSJbsXjFDQn//2gAMAwEAAgADAAAAEMDv/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQEQ/9oACAEDAQE/EAuf/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QCf/EAB4QAQEAAQMFAAAAAAAAAAAAAAERACExUUFhgbHB/9oACAEBAAE/ELUhLV2mh5yIZHVQ24xfS8qzigoB8zrFGqe7gUQu0z//2Q==","aspectRatio":1.5,"src":"/static/683488d1c6772950b32ada080c05f068/bc3a8/codeimage.jpg","srcSet":"/static/683488d1c6772950b32ada080c05f068/d278e/codeimage.jpg 200w,\\n/static/683488d1c6772950b32ada080c05f068/8539d/codeimage.jpg 400w,\\n/static/683488d1c6772950b32ada080c05f068/bc3a8/codeimage.jpg 800w,\\n/static/683488d1c6772950b32ada080c05f068/81ef8/codeimage.jpg 1200w,\\n/static/683488d1c6772950b32ada080c05f068/989b1/codeimage.jpg 1600w,\\n/static/683488d1c6772950b32ada080c05f068/2728f/codeimage.jpg 5184w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-fcfd095f4942b06e82bd.js.map