// Compiled by ClojureScript 1.10.516 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('simpleexample.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.dom');
if((typeof simpleexample !== 'undefined') && (typeof simpleexample.core !== 'undefined') && (typeof simpleexample.core.click_count !== 'undefined')){
} else {
simpleexample.core.click_count = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
simpleexample.core.fib = (function simpleexample$core$fib(n){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))))){
return (1);
} else {
return ((function (){var G__6329 = (n - (1));
return (simpleexample.core.fib.cljs$core$IFn$_invoke$arity$1 ? simpleexample.core.fib.cljs$core$IFn$_invoke$arity$1(G__6329) : simpleexample.core.fib.call(null,G__6329));
})() + (function (){var G__6330 = (n - (2));
return (simpleexample.core.fib.cljs$core$IFn$_invoke$arity$1 ? simpleexample.core.fib.cljs$core$IFn$_invoke$arity$1(G__6330) : simpleexample.core.fib.call(null,G__6330));
})());
}
});
simpleexample.core.click_text = (function simpleexample$core$click_text(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"fib_clj",cljs.core.cst$kw$class,"text",cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(simpleexample.core.click_count,cljs.core.inc);
})], null),simpleexample.core.fib(cljs.core.deref(simpleexample.core.click_count))], null);
});
simpleexample.core.click_button = (function simpleexample$core$click_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,"fib_but",cljs.core.cst$kw$type,"button",cljs.core.cst$kw$class,"btn btn-primary btn-lg btn-block",cljs.core.cst$kw$value,cljs.core.deref(simpleexample.core.click_count),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(simpleexample.core.click_count,cljs.core.inc);
})], null)], null);
});
simpleexample.core.simple_example = (function simpleexample$core$simple_example(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.core.click_text], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.core.click_button], null)], null);
});
simpleexample.core.run = (function simpleexample$core$run(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.core.simple_example], null),document.getElementById("app"));
});
goog.exportSymbol('simpleexample.core.run', simpleexample.core.run);
