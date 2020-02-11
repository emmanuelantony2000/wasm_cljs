// Compiled by ClojureScript 1.10.516 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26706_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26706_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26707 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26708 = null;
var count__26709 = (0);
var i__26710 = (0);
while(true){
if((i__26710 < count__26709)){
var n = cljs.core._nth.call(null,chunk__26708,i__26710);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26711 = seq__26707;
var G__26712 = chunk__26708;
var G__26713 = count__26709;
var G__26714 = (i__26710 + (1));
seq__26707 = G__26711;
chunk__26708 = G__26712;
count__26709 = G__26713;
i__26710 = G__26714;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__26707);
if(temp__5720__auto__){
var seq__26707__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26707__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26707__$1);
var G__26715 = cljs.core.chunk_rest.call(null,seq__26707__$1);
var G__26716 = c__4550__auto__;
var G__26717 = cljs.core.count.call(null,c__4550__auto__);
var G__26718 = (0);
seq__26707 = G__26715;
chunk__26708 = G__26716;
count__26709 = G__26717;
i__26710 = G__26718;
continue;
} else {
var n = cljs.core.first.call(null,seq__26707__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26719 = cljs.core.next.call(null,seq__26707__$1);
var G__26720 = null;
var G__26721 = (0);
var G__26722 = (0);
seq__26707 = G__26719;
chunk__26708 = G__26720;
count__26709 = G__26721;
i__26710 = G__26722;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__26723){
var vec__26724 = p__26723;
var _ = cljs.core.nth.call(null,vec__26724,(0),null);
var v = cljs.core.nth.call(null,vec__26724,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__26727){
var vec__26728 = p__26727;
var k = cljs.core.nth.call(null,vec__26728,(0),null);
var v = cljs.core.nth.call(null,vec__26728,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26740_26748 = cljs.core.seq.call(null,deps);
var chunk__26741_26749 = null;
var count__26742_26750 = (0);
var i__26743_26751 = (0);
while(true){
if((i__26743_26751 < count__26742_26750)){
var dep_26752 = cljs.core._nth.call(null,chunk__26741_26749,i__26743_26751);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_26752;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26752));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26752,(depth + (1)),state);
} else {
}


var G__26753 = seq__26740_26748;
var G__26754 = chunk__26741_26749;
var G__26755 = count__26742_26750;
var G__26756 = (i__26743_26751 + (1));
seq__26740_26748 = G__26753;
chunk__26741_26749 = G__26754;
count__26742_26750 = G__26755;
i__26743_26751 = G__26756;
continue;
} else {
var temp__5720__auto___26757 = cljs.core.seq.call(null,seq__26740_26748);
if(temp__5720__auto___26757){
var seq__26740_26758__$1 = temp__5720__auto___26757;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26740_26758__$1)){
var c__4550__auto___26759 = cljs.core.chunk_first.call(null,seq__26740_26758__$1);
var G__26760 = cljs.core.chunk_rest.call(null,seq__26740_26758__$1);
var G__26761 = c__4550__auto___26759;
var G__26762 = cljs.core.count.call(null,c__4550__auto___26759);
var G__26763 = (0);
seq__26740_26748 = G__26760;
chunk__26741_26749 = G__26761;
count__26742_26750 = G__26762;
i__26743_26751 = G__26763;
continue;
} else {
var dep_26764 = cljs.core.first.call(null,seq__26740_26758__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_26764;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26764));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26764,(depth + (1)),state);
} else {
}


var G__26765 = cljs.core.next.call(null,seq__26740_26758__$1);
var G__26766 = null;
var G__26767 = (0);
var G__26768 = (0);
seq__26740_26748 = G__26765;
chunk__26741_26749 = G__26766;
count__26742_26750 = G__26767;
i__26743_26751 = G__26768;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26744){
var vec__26745 = p__26744;
var seq__26746 = cljs.core.seq.call(null,vec__26745);
var first__26747 = cljs.core.first.call(null,seq__26746);
var seq__26746__$1 = cljs.core.next.call(null,seq__26746);
var x = first__26747;
var xs = seq__26746__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26745,seq__26746,first__26747,seq__26746__$1,x,xs,get_deps__$1){
return (function (p1__26731_SHARP_){
return clojure.set.difference.call(null,p1__26731_SHARP_,x);
});})(vec__26745,seq__26746,first__26747,seq__26746__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26769 = cljs.core.seq.call(null,provides);
var chunk__26770 = null;
var count__26771 = (0);
var i__26772 = (0);
while(true){
if((i__26772 < count__26771)){
var prov = cljs.core._nth.call(null,chunk__26770,i__26772);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26781_26789 = cljs.core.seq.call(null,requires);
var chunk__26782_26790 = null;
var count__26783_26791 = (0);
var i__26784_26792 = (0);
while(true){
if((i__26784_26792 < count__26783_26791)){
var req_26793 = cljs.core._nth.call(null,chunk__26782_26790,i__26784_26792);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26793,prov);


var G__26794 = seq__26781_26789;
var G__26795 = chunk__26782_26790;
var G__26796 = count__26783_26791;
var G__26797 = (i__26784_26792 + (1));
seq__26781_26789 = G__26794;
chunk__26782_26790 = G__26795;
count__26783_26791 = G__26796;
i__26784_26792 = G__26797;
continue;
} else {
var temp__5720__auto___26798 = cljs.core.seq.call(null,seq__26781_26789);
if(temp__5720__auto___26798){
var seq__26781_26799__$1 = temp__5720__auto___26798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26781_26799__$1)){
var c__4550__auto___26800 = cljs.core.chunk_first.call(null,seq__26781_26799__$1);
var G__26801 = cljs.core.chunk_rest.call(null,seq__26781_26799__$1);
var G__26802 = c__4550__auto___26800;
var G__26803 = cljs.core.count.call(null,c__4550__auto___26800);
var G__26804 = (0);
seq__26781_26789 = G__26801;
chunk__26782_26790 = G__26802;
count__26783_26791 = G__26803;
i__26784_26792 = G__26804;
continue;
} else {
var req_26805 = cljs.core.first.call(null,seq__26781_26799__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26805,prov);


var G__26806 = cljs.core.next.call(null,seq__26781_26799__$1);
var G__26807 = null;
var G__26808 = (0);
var G__26809 = (0);
seq__26781_26789 = G__26806;
chunk__26782_26790 = G__26807;
count__26783_26791 = G__26808;
i__26784_26792 = G__26809;
continue;
}
} else {
}
}
break;
}


var G__26810 = seq__26769;
var G__26811 = chunk__26770;
var G__26812 = count__26771;
var G__26813 = (i__26772 + (1));
seq__26769 = G__26810;
chunk__26770 = G__26811;
count__26771 = G__26812;
i__26772 = G__26813;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__26769);
if(temp__5720__auto__){
var seq__26769__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26769__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26769__$1);
var G__26814 = cljs.core.chunk_rest.call(null,seq__26769__$1);
var G__26815 = c__4550__auto__;
var G__26816 = cljs.core.count.call(null,c__4550__auto__);
var G__26817 = (0);
seq__26769 = G__26814;
chunk__26770 = G__26815;
count__26771 = G__26816;
i__26772 = G__26817;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26769__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26785_26818 = cljs.core.seq.call(null,requires);
var chunk__26786_26819 = null;
var count__26787_26820 = (0);
var i__26788_26821 = (0);
while(true){
if((i__26788_26821 < count__26787_26820)){
var req_26822 = cljs.core._nth.call(null,chunk__26786_26819,i__26788_26821);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26822,prov);


var G__26823 = seq__26785_26818;
var G__26824 = chunk__26786_26819;
var G__26825 = count__26787_26820;
var G__26826 = (i__26788_26821 + (1));
seq__26785_26818 = G__26823;
chunk__26786_26819 = G__26824;
count__26787_26820 = G__26825;
i__26788_26821 = G__26826;
continue;
} else {
var temp__5720__auto___26827__$1 = cljs.core.seq.call(null,seq__26785_26818);
if(temp__5720__auto___26827__$1){
var seq__26785_26828__$1 = temp__5720__auto___26827__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26785_26828__$1)){
var c__4550__auto___26829 = cljs.core.chunk_first.call(null,seq__26785_26828__$1);
var G__26830 = cljs.core.chunk_rest.call(null,seq__26785_26828__$1);
var G__26831 = c__4550__auto___26829;
var G__26832 = cljs.core.count.call(null,c__4550__auto___26829);
var G__26833 = (0);
seq__26785_26818 = G__26830;
chunk__26786_26819 = G__26831;
count__26787_26820 = G__26832;
i__26788_26821 = G__26833;
continue;
} else {
var req_26834 = cljs.core.first.call(null,seq__26785_26828__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26834,prov);


var G__26835 = cljs.core.next.call(null,seq__26785_26828__$1);
var G__26836 = null;
var G__26837 = (0);
var G__26838 = (0);
seq__26785_26818 = G__26835;
chunk__26786_26819 = G__26836;
count__26787_26820 = G__26837;
i__26788_26821 = G__26838;
continue;
}
} else {
}
}
break;
}


var G__26839 = cljs.core.next.call(null,seq__26769__$1);
var G__26840 = null;
var G__26841 = (0);
var G__26842 = (0);
seq__26769 = G__26839;
chunk__26770 = G__26840;
count__26771 = G__26841;
i__26772 = G__26842;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26843_26847 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26844_26848 = null;
var count__26845_26849 = (0);
var i__26846_26850 = (0);
while(true){
if((i__26846_26850 < count__26845_26849)){
var ns_26851 = cljs.core._nth.call(null,chunk__26844_26848,i__26846_26850);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26851);


var G__26852 = seq__26843_26847;
var G__26853 = chunk__26844_26848;
var G__26854 = count__26845_26849;
var G__26855 = (i__26846_26850 + (1));
seq__26843_26847 = G__26852;
chunk__26844_26848 = G__26853;
count__26845_26849 = G__26854;
i__26846_26850 = G__26855;
continue;
} else {
var temp__5720__auto___26856 = cljs.core.seq.call(null,seq__26843_26847);
if(temp__5720__auto___26856){
var seq__26843_26857__$1 = temp__5720__auto___26856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26843_26857__$1)){
var c__4550__auto___26858 = cljs.core.chunk_first.call(null,seq__26843_26857__$1);
var G__26859 = cljs.core.chunk_rest.call(null,seq__26843_26857__$1);
var G__26860 = c__4550__auto___26858;
var G__26861 = cljs.core.count.call(null,c__4550__auto___26858);
var G__26862 = (0);
seq__26843_26847 = G__26859;
chunk__26844_26848 = G__26860;
count__26845_26849 = G__26861;
i__26846_26850 = G__26862;
continue;
} else {
var ns_26863 = cljs.core.first.call(null,seq__26843_26857__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26863);


var G__26864 = cljs.core.next.call(null,seq__26843_26857__$1);
var G__26865 = null;
var G__26866 = (0);
var G__26867 = (0);
seq__26843_26847 = G__26864;
chunk__26844_26848 = G__26865;
count__26845_26849 = G__26866;
i__26846_26850 = G__26867;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26868__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26868 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26869__i = 0, G__26869__a = new Array(arguments.length -  0);
while (G__26869__i < G__26869__a.length) {G__26869__a[G__26869__i] = arguments[G__26869__i + 0]; ++G__26869__i;}
  args = new cljs.core.IndexedSeq(G__26869__a,0,null);
} 
return G__26868__delegate.call(this,args);};
G__26868.cljs$lang$maxFixedArity = 0;
G__26868.cljs$lang$applyTo = (function (arglist__26870){
var args = cljs.core.seq(arglist__26870);
return G__26868__delegate(args);
});
G__26868.cljs$core$IFn$_invoke$arity$variadic = G__26868__delegate;
return G__26868;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__26871_SHARP_,p2__26872_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26871_SHARP_)),p2__26872_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__26873_SHARP_,p2__26874_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26873_SHARP_),p2__26874_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__26875 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__26875.addCallback(((function (G__26875){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__26875))
);

G__26875.addErrback(((function (G__26875){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__26875))
);

return G__26875;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e26876){if((e26876 instanceof Error)){
var e = e26876;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26876;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26877){if((e26877 instanceof Error)){
var e = e26877;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26877;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26878 = cljs.core._EQ_;
var expr__26879 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26878.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26879))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__26878.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26879))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__26878.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__26879))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__26878,expr__26879){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26878,expr__26879))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26881,callback){
var map__26882 = p__26881;
var map__26882__$1 = (((((!((map__26882 == null))))?(((((map__26882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26882):map__26882);
var file_msg = map__26882__$1;
var request_url = cljs.core.get.call(null,map__26882__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__26882,map__26882__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26882,map__26882__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23323__auto__){
return (function (){
var f__23324__auto__ = (function (){var switch__23263__auto__ = ((function (c__23323__auto__){
return (function (state_26920){
var state_val_26921 = (state_26920[(1)]);
if((state_val_26921 === (7))){
var inst_26916 = (state_26920[(2)]);
var state_26920__$1 = state_26920;
var statearr_26922_26948 = state_26920__$1;
(statearr_26922_26948[(2)] = inst_26916);

(statearr_26922_26948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (1))){
var state_26920__$1 = state_26920;
var statearr_26923_26949 = state_26920__$1;
(statearr_26923_26949[(2)] = null);

(statearr_26923_26949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (4))){
var inst_26886 = (state_26920[(7)]);
var inst_26886__$1 = (state_26920[(2)]);
var state_26920__$1 = (function (){var statearr_26924 = state_26920;
(statearr_26924[(7)] = inst_26886__$1);

return statearr_26924;
})();
if(cljs.core.truth_(inst_26886__$1)){
var statearr_26925_26950 = state_26920__$1;
(statearr_26925_26950[(1)] = (5));

} else {
var statearr_26926_26951 = state_26920__$1;
(statearr_26926_26951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (15))){
var inst_26901 = (state_26920[(8)]);
var inst_26899 = (state_26920[(9)]);
var inst_26903 = inst_26901.call(null,inst_26899);
var state_26920__$1 = state_26920;
var statearr_26927_26952 = state_26920__$1;
(statearr_26927_26952[(2)] = inst_26903);

(statearr_26927_26952[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (13))){
var inst_26910 = (state_26920[(2)]);
var state_26920__$1 = state_26920;
var statearr_26928_26953 = state_26920__$1;
(statearr_26928_26953[(2)] = inst_26910);

(statearr_26928_26953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (6))){
var state_26920__$1 = state_26920;
var statearr_26929_26954 = state_26920__$1;
(statearr_26929_26954[(2)] = null);

(statearr_26929_26954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (17))){
var inst_26907 = (state_26920[(2)]);
var state_26920__$1 = state_26920;
var statearr_26930_26955 = state_26920__$1;
(statearr_26930_26955[(2)] = inst_26907);

(statearr_26930_26955[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (3))){
var inst_26918 = (state_26920[(2)]);
var state_26920__$1 = state_26920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26920__$1,inst_26918);
} else {
if((state_val_26921 === (12))){
var state_26920__$1 = state_26920;
var statearr_26931_26956 = state_26920__$1;
(statearr_26931_26956[(2)] = null);

(statearr_26931_26956[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (2))){
var state_26920__$1 = state_26920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26920__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26921 === (11))){
var inst_26891 = (state_26920[(10)]);
var inst_26897 = figwheel.client.file_reloading.blocking_load.call(null,inst_26891);
var state_26920__$1 = state_26920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26920__$1,(14),inst_26897);
} else {
if((state_val_26921 === (9))){
var inst_26891 = (state_26920[(10)]);
var state_26920__$1 = state_26920;
if(cljs.core.truth_(inst_26891)){
var statearr_26932_26957 = state_26920__$1;
(statearr_26932_26957[(1)] = (11));

} else {
var statearr_26933_26958 = state_26920__$1;
(statearr_26933_26958[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (5))){
var inst_26892 = (state_26920[(11)]);
var inst_26886 = (state_26920[(7)]);
var inst_26891 = cljs.core.nth.call(null,inst_26886,(0),null);
var inst_26892__$1 = cljs.core.nth.call(null,inst_26886,(1),null);
var state_26920__$1 = (function (){var statearr_26934 = state_26920;
(statearr_26934[(11)] = inst_26892__$1);

(statearr_26934[(10)] = inst_26891);

return statearr_26934;
})();
if(cljs.core.truth_(inst_26892__$1)){
var statearr_26935_26959 = state_26920__$1;
(statearr_26935_26959[(1)] = (8));

} else {
var statearr_26936_26960 = state_26920__$1;
(statearr_26936_26960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (14))){
var inst_26901 = (state_26920[(8)]);
var inst_26891 = (state_26920[(10)]);
var inst_26899 = (state_26920[(2)]);
var inst_26900 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26901__$1 = cljs.core.get.call(null,inst_26900,inst_26891);
var state_26920__$1 = (function (){var statearr_26937 = state_26920;
(statearr_26937[(8)] = inst_26901__$1);

(statearr_26937[(9)] = inst_26899);

return statearr_26937;
})();
if(cljs.core.truth_(inst_26901__$1)){
var statearr_26938_26961 = state_26920__$1;
(statearr_26938_26961[(1)] = (15));

} else {
var statearr_26939_26962 = state_26920__$1;
(statearr_26939_26962[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (16))){
var inst_26899 = (state_26920[(9)]);
var inst_26905 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26899);
var state_26920__$1 = state_26920;
var statearr_26940_26963 = state_26920__$1;
(statearr_26940_26963[(2)] = inst_26905);

(statearr_26940_26963[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (10))){
var inst_26912 = (state_26920[(2)]);
var state_26920__$1 = (function (){var statearr_26941 = state_26920;
(statearr_26941[(12)] = inst_26912);

return statearr_26941;
})();
var statearr_26942_26964 = state_26920__$1;
(statearr_26942_26964[(2)] = null);

(statearr_26942_26964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (8))){
var inst_26892 = (state_26920[(11)]);
var inst_26894 = eval(inst_26892);
var state_26920__$1 = state_26920;
var statearr_26943_26965 = state_26920__$1;
(statearr_26943_26965[(2)] = inst_26894);

(statearr_26943_26965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23323__auto__))
;
return ((function (switch__23263__auto__,c__23323__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23264__auto__ = null;
var figwheel$client$file_reloading$state_machine__23264__auto____0 = (function (){
var statearr_26944 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26944[(0)] = figwheel$client$file_reloading$state_machine__23264__auto__);

(statearr_26944[(1)] = (1));

return statearr_26944;
});
var figwheel$client$file_reloading$state_machine__23264__auto____1 = (function (state_26920){
while(true){
var ret_value__23265__auto__ = (function (){try{while(true){
var result__23266__auto__ = switch__23263__auto__.call(null,state_26920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23266__auto__;
}
break;
}
}catch (e26945){if((e26945 instanceof Object)){
var ex__23267__auto__ = e26945;
var statearr_26946_26966 = state_26920;
(statearr_26946_26966[(5)] = ex__23267__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26967 = state_26920;
state_26920 = G__26967;
continue;
} else {
return ret_value__23265__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23264__auto__ = function(state_26920){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23264__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23264__auto____1.call(this,state_26920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23264__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23264__auto____0;
figwheel$client$file_reloading$state_machine__23264__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23264__auto____1;
return figwheel$client$file_reloading$state_machine__23264__auto__;
})()
;})(switch__23263__auto__,c__23323__auto__))
})();
var state__23325__auto__ = (function (){var statearr_26947 = f__23324__auto__.call(null);
(statearr_26947[(6)] = c__23323__auto__);

return statearr_26947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23325__auto__);
});})(c__23323__auto__))
);

return c__23323__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__26969 = arguments.length;
switch (G__26969) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26971,callback){
var map__26972 = p__26971;
var map__26972__$1 = (((((!((map__26972 == null))))?(((((map__26972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26972):map__26972);
var file_msg = map__26972__$1;
var namespace = cljs.core.get.call(null,map__26972__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26972,map__26972__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26972,map__26972__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__26974){
var map__26975 = p__26974;
var map__26975__$1 = (((((!((map__26975 == null))))?(((((map__26975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26975):map__26975);
var file_msg = map__26975__$1;
var namespace = cljs.core.get.call(null,map__26975__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26977){
var map__26978 = p__26977;
var map__26978__$1 = (((((!((map__26978 == null))))?(((((map__26978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26978):map__26978);
var file_msg = map__26978__$1;
var namespace = cljs.core.get.call(null,map__26978__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26980,callback){
var map__26981 = p__26980;
var map__26981__$1 = (((((!((map__26981 == null))))?(((((map__26981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26981):map__26981);
var file_msg = map__26981__$1;
var request_url = cljs.core.get.call(null,map__26981__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26981__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23323__auto___27031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23323__auto___27031,out){
return (function (){
var f__23324__auto__ = (function (){var switch__23263__auto__ = ((function (c__23323__auto___27031,out){
return (function (state_27016){
var state_val_27017 = (state_27016[(1)]);
if((state_val_27017 === (1))){
var inst_26990 = cljs.core.seq.call(null,files);
var inst_26991 = cljs.core.first.call(null,inst_26990);
var inst_26992 = cljs.core.next.call(null,inst_26990);
var inst_26993 = files;
var state_27016__$1 = (function (){var statearr_27018 = state_27016;
(statearr_27018[(7)] = inst_26991);

(statearr_27018[(8)] = inst_26992);

(statearr_27018[(9)] = inst_26993);

return statearr_27018;
})();
var statearr_27019_27032 = state_27016__$1;
(statearr_27019_27032[(2)] = null);

(statearr_27019_27032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27017 === (2))){
var inst_26999 = (state_27016[(10)]);
var inst_26993 = (state_27016[(9)]);
var inst_26998 = cljs.core.seq.call(null,inst_26993);
var inst_26999__$1 = cljs.core.first.call(null,inst_26998);
var inst_27000 = cljs.core.next.call(null,inst_26998);
var inst_27001 = (inst_26999__$1 == null);
var inst_27002 = cljs.core.not.call(null,inst_27001);
var state_27016__$1 = (function (){var statearr_27020 = state_27016;
(statearr_27020[(10)] = inst_26999__$1);

(statearr_27020[(11)] = inst_27000);

return statearr_27020;
})();
if(inst_27002){
var statearr_27021_27033 = state_27016__$1;
(statearr_27021_27033[(1)] = (4));

} else {
var statearr_27022_27034 = state_27016__$1;
(statearr_27022_27034[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27017 === (3))){
var inst_27014 = (state_27016[(2)]);
var state_27016__$1 = state_27016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27016__$1,inst_27014);
} else {
if((state_val_27017 === (4))){
var inst_26999 = (state_27016[(10)]);
var inst_27004 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26999);
var state_27016__$1 = state_27016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27016__$1,(7),inst_27004);
} else {
if((state_val_27017 === (5))){
var inst_27010 = cljs.core.async.close_BANG_.call(null,out);
var state_27016__$1 = state_27016;
var statearr_27023_27035 = state_27016__$1;
(statearr_27023_27035[(2)] = inst_27010);

(statearr_27023_27035[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27017 === (6))){
var inst_27012 = (state_27016[(2)]);
var state_27016__$1 = state_27016;
var statearr_27024_27036 = state_27016__$1;
(statearr_27024_27036[(2)] = inst_27012);

(statearr_27024_27036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27017 === (7))){
var inst_27000 = (state_27016[(11)]);
var inst_27006 = (state_27016[(2)]);
var inst_27007 = cljs.core.async.put_BANG_.call(null,out,inst_27006);
var inst_26993 = inst_27000;
var state_27016__$1 = (function (){var statearr_27025 = state_27016;
(statearr_27025[(9)] = inst_26993);

(statearr_27025[(12)] = inst_27007);

return statearr_27025;
})();
var statearr_27026_27037 = state_27016__$1;
(statearr_27026_27037[(2)] = null);

(statearr_27026_27037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__23323__auto___27031,out))
;
return ((function (switch__23263__auto__,c__23323__auto___27031,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23264__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23264__auto____0 = (function (){
var statearr_27027 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27027[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23264__auto__);

(statearr_27027[(1)] = (1));

return statearr_27027;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23264__auto____1 = (function (state_27016){
while(true){
var ret_value__23265__auto__ = (function (){try{while(true){
var result__23266__auto__ = switch__23263__auto__.call(null,state_27016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23266__auto__;
}
break;
}
}catch (e27028){if((e27028 instanceof Object)){
var ex__23267__auto__ = e27028;
var statearr_27029_27038 = state_27016;
(statearr_27029_27038[(5)] = ex__23267__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27039 = state_27016;
state_27016 = G__27039;
continue;
} else {
return ret_value__23265__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23264__auto__ = function(state_27016){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23264__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23264__auto____1.call(this,state_27016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23264__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23264__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23264__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23264__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23264__auto__;
})()
;})(switch__23263__auto__,c__23323__auto___27031,out))
})();
var state__23325__auto__ = (function (){var statearr_27030 = f__23324__auto__.call(null);
(statearr_27030[(6)] = c__23323__auto___27031);

return statearr_27030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23325__auto__);
});})(c__23323__auto___27031,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27040,opts){
var map__27041 = p__27040;
var map__27041__$1 = (((((!((map__27041 == null))))?(((((map__27041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27041):map__27041);
var eval_body = cljs.core.get.call(null,map__27041__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27041__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27043){var e = e27043;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27044_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27044_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27045){
var vec__27046 = p__27045;
var k = cljs.core.nth.call(null,vec__27046,(0),null);
var v = cljs.core.nth.call(null,vec__27046,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27049){
var vec__27050 = p__27049;
var k = cljs.core.nth.call(null,vec__27050,(0),null);
var v = cljs.core.nth.call(null,vec__27050,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27056,p__27057){
var map__27058 = p__27056;
var map__27058__$1 = (((((!((map__27058 == null))))?(((((map__27058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27058):map__27058);
var opts = map__27058__$1;
var before_jsload = cljs.core.get.call(null,map__27058__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27058__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27058__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27059 = p__27057;
var map__27059__$1 = (((((!((map__27059 == null))))?(((((map__27059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27059):map__27059);
var msg = map__27059__$1;
var files = cljs.core.get.call(null,map__27059__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27059__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27059__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23323__auto__,map__27058,map__27058__$1,opts,before_jsload,on_jsload,reload_dependents,map__27059,map__27059__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23324__auto__ = (function (){var switch__23263__auto__ = ((function (c__23323__auto__,map__27058,map__27058__$1,opts,before_jsload,on_jsload,reload_dependents,map__27059,map__27059__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27213){
var state_val_27214 = (state_27213[(1)]);
if((state_val_27214 === (7))){
var inst_27075 = (state_27213[(7)]);
var inst_27073 = (state_27213[(8)]);
var inst_27076 = (state_27213[(9)]);
var inst_27074 = (state_27213[(10)]);
var inst_27081 = cljs.core._nth.call(null,inst_27074,inst_27076);
var inst_27082 = figwheel.client.file_reloading.eval_body.call(null,inst_27081,opts);
var inst_27083 = (inst_27076 + (1));
var tmp27215 = inst_27075;
var tmp27216 = inst_27073;
var tmp27217 = inst_27074;
var inst_27073__$1 = tmp27216;
var inst_27074__$1 = tmp27217;
var inst_27075__$1 = tmp27215;
var inst_27076__$1 = inst_27083;
var state_27213__$1 = (function (){var statearr_27218 = state_27213;
(statearr_27218[(7)] = inst_27075__$1);

(statearr_27218[(8)] = inst_27073__$1);

(statearr_27218[(9)] = inst_27076__$1);

(statearr_27218[(11)] = inst_27082);

(statearr_27218[(10)] = inst_27074__$1);

return statearr_27218;
})();
var statearr_27219_27302 = state_27213__$1;
(statearr_27219_27302[(2)] = null);

(statearr_27219_27302[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (20))){
var inst_27116 = (state_27213[(12)]);
var inst_27124 = figwheel.client.file_reloading.sort_files.call(null,inst_27116);
var state_27213__$1 = state_27213;
var statearr_27220_27303 = state_27213__$1;
(statearr_27220_27303[(2)] = inst_27124);

(statearr_27220_27303[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (27))){
var state_27213__$1 = state_27213;
var statearr_27221_27304 = state_27213__$1;
(statearr_27221_27304[(2)] = null);

(statearr_27221_27304[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (1))){
var inst_27065 = (state_27213[(13)]);
var inst_27062 = before_jsload.call(null,files);
var inst_27063 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27064 = (function (){return ((function (inst_27065,inst_27062,inst_27063,state_val_27214,c__23323__auto__,map__27058,map__27058__$1,opts,before_jsload,on_jsload,reload_dependents,map__27059,map__27059__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27053_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27053_SHARP_);
});
;})(inst_27065,inst_27062,inst_27063,state_val_27214,c__23323__auto__,map__27058,map__27058__$1,opts,before_jsload,on_jsload,reload_dependents,map__27059,map__27059__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27065__$1 = cljs.core.filter.call(null,inst_27064,files);
var inst_27066 = cljs.core.not_empty.call(null,inst_27065__$1);
var state_27213__$1 = (function (){var statearr_27222 = state_27213;
(statearr_27222[(14)] = inst_27062);

(statearr_27222[(15)] = inst_27063);

(statearr_27222[(13)] = inst_27065__$1);

return statearr_27222;
})();
if(cljs.core.truth_(inst_27066)){
var statearr_27223_27305 = state_27213__$1;
(statearr_27223_27305[(1)] = (2));

} else {
var statearr_27224_27306 = state_27213__$1;
(statearr_27224_27306[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (24))){
var state_27213__$1 = state_27213;
var statearr_27225_27307 = state_27213__$1;
(statearr_27225_27307[(2)] = null);

(statearr_27225_27307[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (39))){
var inst_27166 = (state_27213[(16)]);
var state_27213__$1 = state_27213;
var statearr_27226_27308 = state_27213__$1;
(statearr_27226_27308[(2)] = inst_27166);

(statearr_27226_27308[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (46))){
var inst_27208 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
var statearr_27227_27309 = state_27213__$1;
(statearr_27227_27309[(2)] = inst_27208);

(statearr_27227_27309[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (4))){
var inst_27110 = (state_27213[(2)]);
var inst_27111 = cljs.core.List.EMPTY;
var inst_27112 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27111);
var inst_27113 = (function (){return ((function (inst_27110,inst_27111,inst_27112,state_val_27214,c__23323__auto__,map__27058,map__27058__$1,opts,before_jsload,on_jsload,reload_dependents,map__27059,map__27059__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27054_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27054_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27054_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27054_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_27110,inst_27111,inst_27112,state_val_27214,c__23323__auto__,map__27058,map__27058__$1,opts,before_jsload,on_jsload,reload_dependents,map__27059,map__27059__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27114 = cljs.core.filter.call(null,inst_27113,files);
var inst_27115 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27116 = cljs.core.concat.call(null,inst_27114,inst_27115);
var state_27213__$1 = (function (){var statearr_27228 = state_27213;
(statearr_27228[(12)] = inst_27116);

(statearr_27228[(17)] = inst_27112);

(statearr_27228[(18)] = inst_27110);

return statearr_27228;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27229_27310 = state_27213__$1;
(statearr_27229_27310[(1)] = (16));

} else {
var statearr_27230_27311 = state_27213__$1;
(statearr_27230_27311[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (15))){
var inst_27100 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
var statearr_27231_27312 = state_27213__$1;
(statearr_27231_27312[(2)] = inst_27100);

(statearr_27231_27312[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (21))){
var inst_27126 = (state_27213[(19)]);
var inst_27126__$1 = (state_27213[(2)]);
var inst_27127 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27126__$1);
var state_27213__$1 = (function (){var statearr_27232 = state_27213;
(statearr_27232[(19)] = inst_27126__$1);

return statearr_27232;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27213__$1,(22),inst_27127);
} else {
if((state_val_27214 === (31))){
var inst_27211 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27213__$1,inst_27211);
} else {
if((state_val_27214 === (32))){
var inst_27166 = (state_27213[(16)]);
var inst_27171 = inst_27166.cljs$lang$protocol_mask$partition0$;
var inst_27172 = (inst_27171 & (64));
var inst_27173 = inst_27166.cljs$core$ISeq$;
var inst_27174 = (cljs.core.PROTOCOL_SENTINEL === inst_27173);
var inst_27175 = ((inst_27172) || (inst_27174));
var state_27213__$1 = state_27213;
if(cljs.core.truth_(inst_27175)){
var statearr_27233_27313 = state_27213__$1;
(statearr_27233_27313[(1)] = (35));

} else {
var statearr_27234_27314 = state_27213__$1;
(statearr_27234_27314[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (40))){
var inst_27188 = (state_27213[(20)]);
var inst_27187 = (state_27213[(2)]);
var inst_27188__$1 = cljs.core.get.call(null,inst_27187,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27189 = cljs.core.get.call(null,inst_27187,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27190 = cljs.core.not_empty.call(null,inst_27188__$1);
var state_27213__$1 = (function (){var statearr_27235 = state_27213;
(statearr_27235[(21)] = inst_27189);

(statearr_27235[(20)] = inst_27188__$1);

return statearr_27235;
})();
if(cljs.core.truth_(inst_27190)){
var statearr_27236_27315 = state_27213__$1;
(statearr_27236_27315[(1)] = (41));

} else {
var statearr_27237_27316 = state_27213__$1;
(statearr_27237_27316[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (33))){
var state_27213__$1 = state_27213;
var statearr_27238_27317 = state_27213__$1;
(statearr_27238_27317[(2)] = false);

(statearr_27238_27317[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (13))){
var inst_27086 = (state_27213[(22)]);
var inst_27090 = cljs.core.chunk_first.call(null,inst_27086);
var inst_27091 = cljs.core.chunk_rest.call(null,inst_27086);
var inst_27092 = cljs.core.count.call(null,inst_27090);
var inst_27073 = inst_27091;
var inst_27074 = inst_27090;
var inst_27075 = inst_27092;
var inst_27076 = (0);
var state_27213__$1 = (function (){var statearr_27239 = state_27213;
(statearr_27239[(7)] = inst_27075);

(statearr_27239[(8)] = inst_27073);

(statearr_27239[(9)] = inst_27076);

(statearr_27239[(10)] = inst_27074);

return statearr_27239;
})();
var statearr_27240_27318 = state_27213__$1;
(statearr_27240_27318[(2)] = null);

(statearr_27240_27318[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (22))){
var inst_27129 = (state_27213[(23)]);
var inst_27130 = (state_27213[(24)]);
var inst_27126 = (state_27213[(19)]);
var inst_27134 = (state_27213[(25)]);
var inst_27129__$1 = (state_27213[(2)]);
var inst_27130__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27129__$1);
var inst_27131 = (function (){var all_files = inst_27126;
var res_SINGLEQUOTE_ = inst_27129__$1;
var res = inst_27130__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27129,inst_27130,inst_27126,inst_27134,inst_27129__$1,inst_27130__$1,state_val_27214,c__23323__auto__,map__27058,map__27058__$1,opts,before_jsload,on_jsload,reload_dependents,map__27059,map__27059__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27055_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27055_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27129,inst_27130,inst_27126,inst_27134,inst_27129__$1,inst_27130__$1,state_val_27214,c__23323__auto__,map__27058,map__27058__$1,opts,before_jsload,on_jsload,reload_dependents,map__27059,map__27059__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27132 = cljs.core.filter.call(null,inst_27131,inst_27129__$1);
var inst_27133 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27134__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27133);
var inst_27135 = cljs.core.not_empty.call(null,inst_27134__$1);
var state_27213__$1 = (function (){var statearr_27241 = state_27213;
(statearr_27241[(23)] = inst_27129__$1);

(statearr_27241[(24)] = inst_27130__$1);

(statearr_27241[(26)] = inst_27132);

(statearr_27241[(25)] = inst_27134__$1);

return statearr_27241;
})();
if(cljs.core.truth_(inst_27135)){
var statearr_27242_27319 = state_27213__$1;
(statearr_27242_27319[(1)] = (23));

} else {
var statearr_27243_27320 = state_27213__$1;
(statearr_27243_27320[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (36))){
var state_27213__$1 = state_27213;
var statearr_27244_27321 = state_27213__$1;
(statearr_27244_27321[(2)] = false);

(statearr_27244_27321[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (41))){
var inst_27188 = (state_27213[(20)]);
var inst_27192 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27193 = cljs.core.map.call(null,inst_27192,inst_27188);
var inst_27194 = cljs.core.pr_str.call(null,inst_27193);
var inst_27195 = ["figwheel-no-load meta-data: ",inst_27194].join('');
var inst_27196 = figwheel.client.utils.log.call(null,inst_27195);
var state_27213__$1 = state_27213;
var statearr_27245_27322 = state_27213__$1;
(statearr_27245_27322[(2)] = inst_27196);

(statearr_27245_27322[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (43))){
var inst_27189 = (state_27213[(21)]);
var inst_27199 = (state_27213[(2)]);
var inst_27200 = cljs.core.not_empty.call(null,inst_27189);
var state_27213__$1 = (function (){var statearr_27246 = state_27213;
(statearr_27246[(27)] = inst_27199);

return statearr_27246;
})();
if(cljs.core.truth_(inst_27200)){
var statearr_27247_27323 = state_27213__$1;
(statearr_27247_27323[(1)] = (44));

} else {
var statearr_27248_27324 = state_27213__$1;
(statearr_27248_27324[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (29))){
var inst_27129 = (state_27213[(23)]);
var inst_27130 = (state_27213[(24)]);
var inst_27132 = (state_27213[(26)]);
var inst_27126 = (state_27213[(19)]);
var inst_27166 = (state_27213[(16)]);
var inst_27134 = (state_27213[(25)]);
var inst_27162 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27165 = (function (){var all_files = inst_27126;
var res_SINGLEQUOTE_ = inst_27129;
var res = inst_27130;
var files_not_loaded = inst_27132;
var dependencies_that_loaded = inst_27134;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27129,inst_27130,inst_27132,inst_27126,inst_27166,inst_27134,inst_27162,state_val_27214,c__23323__auto__,map__27058,map__27058__$1,opts,before_jsload,on_jsload,reload_dependents,map__27059,map__27059__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27164){
var map__27249 = p__27164;
var map__27249__$1 = (((((!((map__27249 == null))))?(((((map__27249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27249):map__27249);
var namespace = cljs.core.get.call(null,map__27249__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27129,inst_27130,inst_27132,inst_27126,inst_27166,inst_27134,inst_27162,state_val_27214,c__23323__auto__,map__27058,map__27058__$1,opts,before_jsload,on_jsload,reload_dependents,map__27059,map__27059__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27166__$1 = cljs.core.group_by.call(null,inst_27165,inst_27132);
var inst_27168 = (inst_27166__$1 == null);
var inst_27169 = cljs.core.not.call(null,inst_27168);
var state_27213__$1 = (function (){var statearr_27251 = state_27213;
(statearr_27251[(28)] = inst_27162);

(statearr_27251[(16)] = inst_27166__$1);

return statearr_27251;
})();
if(inst_27169){
var statearr_27252_27325 = state_27213__$1;
(statearr_27252_27325[(1)] = (32));

} else {
var statearr_27253_27326 = state_27213__$1;
(statearr_27253_27326[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (44))){
var inst_27189 = (state_27213[(21)]);
var inst_27202 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27189);
var inst_27203 = cljs.core.pr_str.call(null,inst_27202);
var inst_27204 = ["not required: ",inst_27203].join('');
var inst_27205 = figwheel.client.utils.log.call(null,inst_27204);
var state_27213__$1 = state_27213;
var statearr_27254_27327 = state_27213__$1;
(statearr_27254_27327[(2)] = inst_27205);

(statearr_27254_27327[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (6))){
var inst_27107 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
var statearr_27255_27328 = state_27213__$1;
(statearr_27255_27328[(2)] = inst_27107);

(statearr_27255_27328[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (28))){
var inst_27132 = (state_27213[(26)]);
var inst_27159 = (state_27213[(2)]);
var inst_27160 = cljs.core.not_empty.call(null,inst_27132);
var state_27213__$1 = (function (){var statearr_27256 = state_27213;
(statearr_27256[(29)] = inst_27159);

return statearr_27256;
})();
if(cljs.core.truth_(inst_27160)){
var statearr_27257_27329 = state_27213__$1;
(statearr_27257_27329[(1)] = (29));

} else {
var statearr_27258_27330 = state_27213__$1;
(statearr_27258_27330[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (25))){
var inst_27130 = (state_27213[(24)]);
var inst_27146 = (state_27213[(2)]);
var inst_27147 = cljs.core.not_empty.call(null,inst_27130);
var state_27213__$1 = (function (){var statearr_27259 = state_27213;
(statearr_27259[(30)] = inst_27146);

return statearr_27259;
})();
if(cljs.core.truth_(inst_27147)){
var statearr_27260_27331 = state_27213__$1;
(statearr_27260_27331[(1)] = (26));

} else {
var statearr_27261_27332 = state_27213__$1;
(statearr_27261_27332[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (34))){
var inst_27182 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
if(cljs.core.truth_(inst_27182)){
var statearr_27262_27333 = state_27213__$1;
(statearr_27262_27333[(1)] = (38));

} else {
var statearr_27263_27334 = state_27213__$1;
(statearr_27263_27334[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (17))){
var state_27213__$1 = state_27213;
var statearr_27264_27335 = state_27213__$1;
(statearr_27264_27335[(2)] = recompile_dependents);

(statearr_27264_27335[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (3))){
var state_27213__$1 = state_27213;
var statearr_27265_27336 = state_27213__$1;
(statearr_27265_27336[(2)] = null);

(statearr_27265_27336[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (12))){
var inst_27103 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
var statearr_27266_27337 = state_27213__$1;
(statearr_27266_27337[(2)] = inst_27103);

(statearr_27266_27337[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (2))){
var inst_27065 = (state_27213[(13)]);
var inst_27072 = cljs.core.seq.call(null,inst_27065);
var inst_27073 = inst_27072;
var inst_27074 = null;
var inst_27075 = (0);
var inst_27076 = (0);
var state_27213__$1 = (function (){var statearr_27267 = state_27213;
(statearr_27267[(7)] = inst_27075);

(statearr_27267[(8)] = inst_27073);

(statearr_27267[(9)] = inst_27076);

(statearr_27267[(10)] = inst_27074);

return statearr_27267;
})();
var statearr_27268_27338 = state_27213__$1;
(statearr_27268_27338[(2)] = null);

(statearr_27268_27338[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (23))){
var inst_27129 = (state_27213[(23)]);
var inst_27130 = (state_27213[(24)]);
var inst_27132 = (state_27213[(26)]);
var inst_27126 = (state_27213[(19)]);
var inst_27134 = (state_27213[(25)]);
var inst_27137 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27139 = (function (){var all_files = inst_27126;
var res_SINGLEQUOTE_ = inst_27129;
var res = inst_27130;
var files_not_loaded = inst_27132;
var dependencies_that_loaded = inst_27134;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27129,inst_27130,inst_27132,inst_27126,inst_27134,inst_27137,state_val_27214,c__23323__auto__,map__27058,map__27058__$1,opts,before_jsload,on_jsload,reload_dependents,map__27059,map__27059__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27138){
var map__27269 = p__27138;
var map__27269__$1 = (((((!((map__27269 == null))))?(((((map__27269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27269):map__27269);
var request_url = cljs.core.get.call(null,map__27269__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27129,inst_27130,inst_27132,inst_27126,inst_27134,inst_27137,state_val_27214,c__23323__auto__,map__27058,map__27058__$1,opts,before_jsload,on_jsload,reload_dependents,map__27059,map__27059__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27140 = cljs.core.reverse.call(null,inst_27134);
var inst_27141 = cljs.core.map.call(null,inst_27139,inst_27140);
var inst_27142 = cljs.core.pr_str.call(null,inst_27141);
var inst_27143 = figwheel.client.utils.log.call(null,inst_27142);
var state_27213__$1 = (function (){var statearr_27271 = state_27213;
(statearr_27271[(31)] = inst_27137);

return statearr_27271;
})();
var statearr_27272_27339 = state_27213__$1;
(statearr_27272_27339[(2)] = inst_27143);

(statearr_27272_27339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (35))){
var state_27213__$1 = state_27213;
var statearr_27273_27340 = state_27213__$1;
(statearr_27273_27340[(2)] = true);

(statearr_27273_27340[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (19))){
var inst_27116 = (state_27213[(12)]);
var inst_27122 = figwheel.client.file_reloading.expand_files.call(null,inst_27116);
var state_27213__$1 = state_27213;
var statearr_27274_27341 = state_27213__$1;
(statearr_27274_27341[(2)] = inst_27122);

(statearr_27274_27341[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (11))){
var state_27213__$1 = state_27213;
var statearr_27275_27342 = state_27213__$1;
(statearr_27275_27342[(2)] = null);

(statearr_27275_27342[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (9))){
var inst_27105 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
var statearr_27276_27343 = state_27213__$1;
(statearr_27276_27343[(2)] = inst_27105);

(statearr_27276_27343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (5))){
var inst_27075 = (state_27213[(7)]);
var inst_27076 = (state_27213[(9)]);
var inst_27078 = (inst_27076 < inst_27075);
var inst_27079 = inst_27078;
var state_27213__$1 = state_27213;
if(cljs.core.truth_(inst_27079)){
var statearr_27277_27344 = state_27213__$1;
(statearr_27277_27344[(1)] = (7));

} else {
var statearr_27278_27345 = state_27213__$1;
(statearr_27278_27345[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (14))){
var inst_27086 = (state_27213[(22)]);
var inst_27095 = cljs.core.first.call(null,inst_27086);
var inst_27096 = figwheel.client.file_reloading.eval_body.call(null,inst_27095,opts);
var inst_27097 = cljs.core.next.call(null,inst_27086);
var inst_27073 = inst_27097;
var inst_27074 = null;
var inst_27075 = (0);
var inst_27076 = (0);
var state_27213__$1 = (function (){var statearr_27279 = state_27213;
(statearr_27279[(7)] = inst_27075);

(statearr_27279[(8)] = inst_27073);

(statearr_27279[(9)] = inst_27076);

(statearr_27279[(10)] = inst_27074);

(statearr_27279[(32)] = inst_27096);

return statearr_27279;
})();
var statearr_27280_27346 = state_27213__$1;
(statearr_27280_27346[(2)] = null);

(statearr_27280_27346[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (45))){
var state_27213__$1 = state_27213;
var statearr_27281_27347 = state_27213__$1;
(statearr_27281_27347[(2)] = null);

(statearr_27281_27347[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (26))){
var inst_27129 = (state_27213[(23)]);
var inst_27130 = (state_27213[(24)]);
var inst_27132 = (state_27213[(26)]);
var inst_27126 = (state_27213[(19)]);
var inst_27134 = (state_27213[(25)]);
var inst_27149 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27151 = (function (){var all_files = inst_27126;
var res_SINGLEQUOTE_ = inst_27129;
var res = inst_27130;
var files_not_loaded = inst_27132;
var dependencies_that_loaded = inst_27134;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27129,inst_27130,inst_27132,inst_27126,inst_27134,inst_27149,state_val_27214,c__23323__auto__,map__27058,map__27058__$1,opts,before_jsload,on_jsload,reload_dependents,map__27059,map__27059__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27150){
var map__27282 = p__27150;
var map__27282__$1 = (((((!((map__27282 == null))))?(((((map__27282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27282):map__27282);
var namespace = cljs.core.get.call(null,map__27282__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27282__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27129,inst_27130,inst_27132,inst_27126,inst_27134,inst_27149,state_val_27214,c__23323__auto__,map__27058,map__27058__$1,opts,before_jsload,on_jsload,reload_dependents,map__27059,map__27059__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27152 = cljs.core.map.call(null,inst_27151,inst_27130);
var inst_27153 = cljs.core.pr_str.call(null,inst_27152);
var inst_27154 = figwheel.client.utils.log.call(null,inst_27153);
var inst_27155 = (function (){var all_files = inst_27126;
var res_SINGLEQUOTE_ = inst_27129;
var res = inst_27130;
var files_not_loaded = inst_27132;
var dependencies_that_loaded = inst_27134;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27129,inst_27130,inst_27132,inst_27126,inst_27134,inst_27149,inst_27151,inst_27152,inst_27153,inst_27154,state_val_27214,c__23323__auto__,map__27058,map__27058__$1,opts,before_jsload,on_jsload,reload_dependents,map__27059,map__27059__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27129,inst_27130,inst_27132,inst_27126,inst_27134,inst_27149,inst_27151,inst_27152,inst_27153,inst_27154,state_val_27214,c__23323__auto__,map__27058,map__27058__$1,opts,before_jsload,on_jsload,reload_dependents,map__27059,map__27059__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27156 = setTimeout(inst_27155,(10));
var state_27213__$1 = (function (){var statearr_27284 = state_27213;
(statearr_27284[(33)] = inst_27149);

(statearr_27284[(34)] = inst_27154);

return statearr_27284;
})();
var statearr_27285_27348 = state_27213__$1;
(statearr_27285_27348[(2)] = inst_27156);

(statearr_27285_27348[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (16))){
var state_27213__$1 = state_27213;
var statearr_27286_27349 = state_27213__$1;
(statearr_27286_27349[(2)] = reload_dependents);

(statearr_27286_27349[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (38))){
var inst_27166 = (state_27213[(16)]);
var inst_27184 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27166);
var state_27213__$1 = state_27213;
var statearr_27287_27350 = state_27213__$1;
(statearr_27287_27350[(2)] = inst_27184);

(statearr_27287_27350[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (30))){
var state_27213__$1 = state_27213;
var statearr_27288_27351 = state_27213__$1;
(statearr_27288_27351[(2)] = null);

(statearr_27288_27351[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (10))){
var inst_27086 = (state_27213[(22)]);
var inst_27088 = cljs.core.chunked_seq_QMARK_.call(null,inst_27086);
var state_27213__$1 = state_27213;
if(inst_27088){
var statearr_27289_27352 = state_27213__$1;
(statearr_27289_27352[(1)] = (13));

} else {
var statearr_27290_27353 = state_27213__$1;
(statearr_27290_27353[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (18))){
var inst_27120 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
if(cljs.core.truth_(inst_27120)){
var statearr_27291_27354 = state_27213__$1;
(statearr_27291_27354[(1)] = (19));

} else {
var statearr_27292_27355 = state_27213__$1;
(statearr_27292_27355[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (42))){
var state_27213__$1 = state_27213;
var statearr_27293_27356 = state_27213__$1;
(statearr_27293_27356[(2)] = null);

(statearr_27293_27356[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (37))){
var inst_27179 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
var statearr_27294_27357 = state_27213__$1;
(statearr_27294_27357[(2)] = inst_27179);

(statearr_27294_27357[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (8))){
var inst_27073 = (state_27213[(8)]);
var inst_27086 = (state_27213[(22)]);
var inst_27086__$1 = cljs.core.seq.call(null,inst_27073);
var state_27213__$1 = (function (){var statearr_27295 = state_27213;
(statearr_27295[(22)] = inst_27086__$1);

return statearr_27295;
})();
if(inst_27086__$1){
var statearr_27296_27358 = state_27213__$1;
(statearr_27296_27358[(1)] = (10));

} else {
var statearr_27297_27359 = state_27213__$1;
(statearr_27297_27359[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23323__auto__,map__27058,map__27058__$1,opts,before_jsload,on_jsload,reload_dependents,map__27059,map__27059__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23263__auto__,c__23323__auto__,map__27058,map__27058__$1,opts,before_jsload,on_jsload,reload_dependents,map__27059,map__27059__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23264__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23264__auto____0 = (function (){
var statearr_27298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27298[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23264__auto__);

(statearr_27298[(1)] = (1));

return statearr_27298;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23264__auto____1 = (function (state_27213){
while(true){
var ret_value__23265__auto__ = (function (){try{while(true){
var result__23266__auto__ = switch__23263__auto__.call(null,state_27213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23266__auto__;
}
break;
}
}catch (e27299){if((e27299 instanceof Object)){
var ex__23267__auto__ = e27299;
var statearr_27300_27360 = state_27213;
(statearr_27300_27360[(5)] = ex__23267__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27361 = state_27213;
state_27213 = G__27361;
continue;
} else {
return ret_value__23265__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23264__auto__ = function(state_27213){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23264__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23264__auto____1.call(this,state_27213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23264__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23264__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23264__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23264__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23264__auto__;
})()
;})(switch__23263__auto__,c__23323__auto__,map__27058,map__27058__$1,opts,before_jsload,on_jsload,reload_dependents,map__27059,map__27059__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23325__auto__ = (function (){var statearr_27301 = f__23324__auto__.call(null);
(statearr_27301[(6)] = c__23323__auto__);

return statearr_27301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23325__auto__);
});})(c__23323__auto__,map__27058,map__27058__$1,opts,before_jsload,on_jsload,reload_dependents,map__27059,map__27059__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23323__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27364,link){
var map__27365 = p__27364;
var map__27365__$1 = (((((!((map__27365 == null))))?(((((map__27365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27365):map__27365);
var file = cljs.core.get.call(null,map__27365__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__27365,map__27365__$1,file){
return (function (p1__27362_SHARP_,p2__27363_SHARP_){
if(cljs.core._EQ_.call(null,p1__27362_SHARP_,p2__27363_SHARP_)){
return p1__27362_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__27365,map__27365__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27368){
var map__27369 = p__27368;
var map__27369__$1 = (((((!((map__27369 == null))))?(((((map__27369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27369):map__27369);
var match_length = cljs.core.get.call(null,map__27369__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27369__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27367_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27367_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27371_SHARP_,p2__27372_SHARP_){
return cljs.core.assoc.call(null,p1__27371_SHARP_,cljs.core.get.call(null,p2__27372_SHARP_,key),p2__27372_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_27373 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_27373);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_27373);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27374,p__27375){
var map__27376 = p__27374;
var map__27376__$1 = (((((!((map__27376 == null))))?(((((map__27376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27376):map__27376);
var on_cssload = cljs.core.get.call(null,map__27376__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__27377 = p__27375;
var map__27377__$1 = (((((!((map__27377 == null))))?(((((map__27377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27377):map__27377);
var files_msg = map__27377__$1;
var files = cljs.core.get.call(null,map__27377__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1581396558681
