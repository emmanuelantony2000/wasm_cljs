// Compiled by ClojureScript 1.10.516 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__29081__delegate = function (x__29065__auto__){
if(cljs.core.truth_(simpleexample.core.run)){
return cljs.core.apply.call(null,simpleexample.core.run,x__29065__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","simpleexample.core/run","' is missing"].join(''));
}
};
var G__29081 = function (var_args){
var x__29065__auto__ = null;
if (arguments.length > 0) {
var G__29082__i = 0, G__29082__a = new Array(arguments.length -  0);
while (G__29082__i < G__29082__a.length) {G__29082__a[G__29082__i] = arguments[G__29082__i + 0]; ++G__29082__i;}
  x__29065__auto__ = new cljs.core.IndexedSeq(G__29082__a,0,null);
} 
return G__29081__delegate.call(this,x__29065__auto__);};
G__29081.cljs$lang$maxFixedArity = 0;
G__29081.cljs$lang$applyTo = (function (arglist__29083){
var x__29065__auto__ = cljs.core.seq(arglist__29083);
return G__29081__delegate(x__29065__auto__);
});
G__29081.cljs$core$IFn$_invoke$arity$variadic = G__29081__delegate;
return G__29081;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"client",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1581396567561
