// Compiled by ClojureScript 1.10.516 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__5820__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5820 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5821__i = 0, G__5821__a = new Array(arguments.length -  0);
while (G__5821__i < G__5821__a.length) {G__5821__a[G__5821__i] = arguments[G__5821__i + 0]; ++G__5821__i;}
  args = new cljs.core.IndexedSeq(G__5821__a,0,null);
} 
return G__5820__delegate.call(this,args);};
G__5820.cljs$lang$maxFixedArity = 0;
G__5820.cljs$lang$applyTo = (function (arglist__5822){
var args = cljs.core.seq(arglist__5822);
return G__5820__delegate(args);
});
G__5820.cljs$core$IFn$_invoke$arity$variadic = G__5820__delegate;
return G__5820;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__5823__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5823 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5824__i = 0, G__5824__a = new Array(arguments.length -  0);
while (G__5824__i < G__5824__a.length) {G__5824__a[G__5824__i] = arguments[G__5824__i + 0]; ++G__5824__i;}
  args = new cljs.core.IndexedSeq(G__5824__a,0,null);
} 
return G__5823__delegate.call(this,args);};
G__5823.cljs$lang$maxFixedArity = 0;
G__5823.cljs$lang$applyTo = (function (arglist__5825){
var args = cljs.core.seq(arglist__5825);
return G__5823__delegate(args);
});
G__5823.cljs$core$IFn$_invoke$arity$variadic = G__5823__delegate;
return G__5823;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
