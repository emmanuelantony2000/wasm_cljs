// Compiled by ClojureScript 1.10.516 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e28583){if((e28583 instanceof Error)){
var e = e28583;
return "Error: Unable to stringify";
} else {
throw e28583;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__28586 = arguments.length;
switch (G__28586) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__28584_SHARP_){
if(typeof p1__28584_SHARP_ === 'string'){
return p1__28584_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__28584_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28589 = arguments.length;
var i__4731__auto___28590 = (0);
while(true){
if((i__4731__auto___28590 < len__4730__auto___28589)){
args__4736__auto__.push((arguments[i__4731__auto___28590]));

var G__28591 = (i__4731__auto___28590 + (1));
i__4731__auto___28590 = G__28591;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq28588){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28588));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28593 = arguments.length;
var i__4731__auto___28594 = (0);
while(true){
if((i__4731__auto___28594 < len__4730__auto___28593)){
args__4736__auto__.push((arguments[i__4731__auto___28594]));

var G__28595 = (i__4731__auto___28594 + (1));
i__4731__auto___28594 = G__28595;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq28592){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28592));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28596){
var map__28597 = p__28596;
var map__28597__$1 = (((((!((map__28597 == null))))?(((((map__28597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28597):map__28597);
var message = cljs.core.get.call(null,map__28597__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28597__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23323__auto___28676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23323__auto___28676,ch){
return (function (){
var f__23324__auto__ = (function (){var switch__23263__auto__ = ((function (c__23323__auto___28676,ch){
return (function (state_28648){
var state_val_28649 = (state_28648[(1)]);
if((state_val_28649 === (7))){
var inst_28644 = (state_28648[(2)]);
var state_28648__$1 = state_28648;
var statearr_28650_28677 = state_28648__$1;
(statearr_28650_28677[(2)] = inst_28644);

(statearr_28650_28677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (1))){
var state_28648__$1 = state_28648;
var statearr_28651_28678 = state_28648__$1;
(statearr_28651_28678[(2)] = null);

(statearr_28651_28678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (4))){
var inst_28601 = (state_28648[(7)]);
var inst_28601__$1 = (state_28648[(2)]);
var state_28648__$1 = (function (){var statearr_28652 = state_28648;
(statearr_28652[(7)] = inst_28601__$1);

return statearr_28652;
})();
if(cljs.core.truth_(inst_28601__$1)){
var statearr_28653_28679 = state_28648__$1;
(statearr_28653_28679[(1)] = (5));

} else {
var statearr_28654_28680 = state_28648__$1;
(statearr_28654_28680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (15))){
var inst_28608 = (state_28648[(8)]);
var inst_28623 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28608);
var inst_28624 = cljs.core.first.call(null,inst_28623);
var inst_28625 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28624);
var inst_28626 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28625)].join('');
var inst_28627 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28626);
var state_28648__$1 = state_28648;
var statearr_28655_28681 = state_28648__$1;
(statearr_28655_28681[(2)] = inst_28627);

(statearr_28655_28681[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (13))){
var inst_28632 = (state_28648[(2)]);
var state_28648__$1 = state_28648;
var statearr_28656_28682 = state_28648__$1;
(statearr_28656_28682[(2)] = inst_28632);

(statearr_28656_28682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (6))){
var state_28648__$1 = state_28648;
var statearr_28657_28683 = state_28648__$1;
(statearr_28657_28683[(2)] = null);

(statearr_28657_28683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (17))){
var inst_28630 = (state_28648[(2)]);
var state_28648__$1 = state_28648;
var statearr_28658_28684 = state_28648__$1;
(statearr_28658_28684[(2)] = inst_28630);

(statearr_28658_28684[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (3))){
var inst_28646 = (state_28648[(2)]);
var state_28648__$1 = state_28648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28648__$1,inst_28646);
} else {
if((state_val_28649 === (12))){
var inst_28607 = (state_28648[(9)]);
var inst_28621 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28607,opts);
var state_28648__$1 = state_28648;
if(inst_28621){
var statearr_28659_28685 = state_28648__$1;
(statearr_28659_28685[(1)] = (15));

} else {
var statearr_28660_28686 = state_28648__$1;
(statearr_28660_28686[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (2))){
var state_28648__$1 = state_28648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28648__$1,(4),ch);
} else {
if((state_val_28649 === (11))){
var inst_28608 = (state_28648[(8)]);
var inst_28613 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28614 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28608);
var inst_28615 = cljs.core.async.timeout.call(null,(1000));
var inst_28616 = [inst_28614,inst_28615];
var inst_28617 = (new cljs.core.PersistentVector(null,2,(5),inst_28613,inst_28616,null));
var state_28648__$1 = state_28648;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28648__$1,(14),inst_28617);
} else {
if((state_val_28649 === (9))){
var inst_28608 = (state_28648[(8)]);
var inst_28634 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28635 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28608);
var inst_28636 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28635);
var inst_28637 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28636)].join('');
var inst_28638 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28637);
var state_28648__$1 = (function (){var statearr_28661 = state_28648;
(statearr_28661[(10)] = inst_28634);

return statearr_28661;
})();
var statearr_28662_28687 = state_28648__$1;
(statearr_28662_28687[(2)] = inst_28638);

(statearr_28662_28687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (5))){
var inst_28601 = (state_28648[(7)]);
var inst_28603 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28604 = (new cljs.core.PersistentArrayMap(null,2,inst_28603,null));
var inst_28605 = (new cljs.core.PersistentHashSet(null,inst_28604,null));
var inst_28606 = figwheel.client.focus_msgs.call(null,inst_28605,inst_28601);
var inst_28607 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28606);
var inst_28608 = cljs.core.first.call(null,inst_28606);
var inst_28609 = figwheel.client.autoload_QMARK_.call(null);
var state_28648__$1 = (function (){var statearr_28663 = state_28648;
(statearr_28663[(8)] = inst_28608);

(statearr_28663[(9)] = inst_28607);

return statearr_28663;
})();
if(cljs.core.truth_(inst_28609)){
var statearr_28664_28688 = state_28648__$1;
(statearr_28664_28688[(1)] = (8));

} else {
var statearr_28665_28689 = state_28648__$1;
(statearr_28665_28689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (14))){
var inst_28619 = (state_28648[(2)]);
var state_28648__$1 = state_28648;
var statearr_28666_28690 = state_28648__$1;
(statearr_28666_28690[(2)] = inst_28619);

(statearr_28666_28690[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (16))){
var state_28648__$1 = state_28648;
var statearr_28667_28691 = state_28648__$1;
(statearr_28667_28691[(2)] = null);

(statearr_28667_28691[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (10))){
var inst_28640 = (state_28648[(2)]);
var state_28648__$1 = (function (){var statearr_28668 = state_28648;
(statearr_28668[(11)] = inst_28640);

return statearr_28668;
})();
var statearr_28669_28692 = state_28648__$1;
(statearr_28669_28692[(2)] = null);

(statearr_28669_28692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (8))){
var inst_28607 = (state_28648[(9)]);
var inst_28611 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28607,opts);
var state_28648__$1 = state_28648;
if(cljs.core.truth_(inst_28611)){
var statearr_28670_28693 = state_28648__$1;
(statearr_28670_28693[(1)] = (11));

} else {
var statearr_28671_28694 = state_28648__$1;
(statearr_28671_28694[(1)] = (12));

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
});})(c__23323__auto___28676,ch))
;
return ((function (switch__23263__auto__,c__23323__auto___28676,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23264__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23264__auto____0 = (function (){
var statearr_28672 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28672[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23264__auto__);

(statearr_28672[(1)] = (1));

return statearr_28672;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23264__auto____1 = (function (state_28648){
while(true){
var ret_value__23265__auto__ = (function (){try{while(true){
var result__23266__auto__ = switch__23263__auto__.call(null,state_28648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23266__auto__;
}
break;
}
}catch (e28673){if((e28673 instanceof Object)){
var ex__23267__auto__ = e28673;
var statearr_28674_28695 = state_28648;
(statearr_28674_28695[(5)] = ex__23267__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28696 = state_28648;
state_28648 = G__28696;
continue;
} else {
return ret_value__23265__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23264__auto__ = function(state_28648){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23264__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23264__auto____1.call(this,state_28648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23264__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23264__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23264__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23264__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23264__auto__;
})()
;})(switch__23263__auto__,c__23323__auto___28676,ch))
})();
var state__23325__auto__ = (function (){var statearr_28675 = f__23324__auto__.call(null);
(statearr_28675[(6)] = c__23323__auto___28676);

return statearr_28675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23325__auto__);
});})(c__23323__auto___28676,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28697_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28697_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_28703 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28703){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28699 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28700 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28701 = true;
var _STAR_print_fn_STAR__temp_val__28702 = ((function (_STAR_print_newline_STAR__orig_val__28699,_STAR_print_fn_STAR__orig_val__28700,_STAR_print_newline_STAR__temp_val__28701,sb,base_path_28703){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__28699,_STAR_print_fn_STAR__orig_val__28700,_STAR_print_newline_STAR__temp_val__28701,sb,base_path_28703))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28701;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28702;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28700;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28699;
}}catch (e28698){if((e28698 instanceof Error)){
var e = e28698;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28703], null));
} else {
var e = e28698;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28703))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28704){
var map__28705 = p__28704;
var map__28705__$1 = (((((!((map__28705 == null))))?(((((map__28705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28705):map__28705);
var opts = map__28705__$1;
var build_id = cljs.core.get.call(null,map__28705__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28705,map__28705__$1,opts,build_id){
return (function (p__28707){
var vec__28708 = p__28707;
var seq__28709 = cljs.core.seq.call(null,vec__28708);
var first__28710 = cljs.core.first.call(null,seq__28709);
var seq__28709__$1 = cljs.core.next.call(null,seq__28709);
var map__28711 = first__28710;
var map__28711__$1 = (((((!((map__28711 == null))))?(((((map__28711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28711):map__28711);
var msg = map__28711__$1;
var msg_name = cljs.core.get.call(null,map__28711__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28709__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28708,seq__28709,first__28710,seq__28709__$1,map__28711,map__28711__$1,msg,msg_name,_,map__28705,map__28705__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28708,seq__28709,first__28710,seq__28709__$1,map__28711,map__28711__$1,msg,msg_name,_,map__28705,map__28705__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28705,map__28705__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28713){
var vec__28714 = p__28713;
var seq__28715 = cljs.core.seq.call(null,vec__28714);
var first__28716 = cljs.core.first.call(null,seq__28715);
var seq__28715__$1 = cljs.core.next.call(null,seq__28715);
var map__28717 = first__28716;
var map__28717__$1 = (((((!((map__28717 == null))))?(((((map__28717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28717):map__28717);
var msg = map__28717__$1;
var msg_name = cljs.core.get.call(null,map__28717__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28715__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28719){
var map__28720 = p__28719;
var map__28720__$1 = (((((!((map__28720 == null))))?(((((map__28720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28720):map__28720);
var on_compile_warning = cljs.core.get.call(null,map__28720__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28720__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28720,map__28720__$1,on_compile_warning,on_compile_fail){
return (function (p__28722){
var vec__28723 = p__28722;
var seq__28724 = cljs.core.seq.call(null,vec__28723);
var first__28725 = cljs.core.first.call(null,seq__28724);
var seq__28724__$1 = cljs.core.next.call(null,seq__28724);
var map__28726 = first__28725;
var map__28726__$1 = (((((!((map__28726 == null))))?(((((map__28726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28726):map__28726);
var msg = map__28726__$1;
var msg_name = cljs.core.get.call(null,map__28726__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28724__$1;
var pred__28728 = cljs.core._EQ_;
var expr__28729 = msg_name;
if(cljs.core.truth_(pred__28728.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28729))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28728.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28729))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28720,map__28720__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23323__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23324__auto__ = (function (){var switch__23263__auto__ = ((function (c__23323__auto__,msg_hist,msg_names,msg){
return (function (state_28818){
var state_val_28819 = (state_28818[(1)]);
if((state_val_28819 === (7))){
var inst_28738 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
if(cljs.core.truth_(inst_28738)){
var statearr_28820_28867 = state_28818__$1;
(statearr_28820_28867[(1)] = (8));

} else {
var statearr_28821_28868 = state_28818__$1;
(statearr_28821_28868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (20))){
var inst_28812 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
var statearr_28822_28869 = state_28818__$1;
(statearr_28822_28869[(2)] = inst_28812);

(statearr_28822_28869[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (27))){
var inst_28808 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
var statearr_28823_28870 = state_28818__$1;
(statearr_28823_28870[(2)] = inst_28808);

(statearr_28823_28870[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (1))){
var inst_28731 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28818__$1 = state_28818;
if(cljs.core.truth_(inst_28731)){
var statearr_28824_28871 = state_28818__$1;
(statearr_28824_28871[(1)] = (2));

} else {
var statearr_28825_28872 = state_28818__$1;
(statearr_28825_28872[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (24))){
var inst_28810 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
var statearr_28826_28873 = state_28818__$1;
(statearr_28826_28873[(2)] = inst_28810);

(statearr_28826_28873[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (4))){
var inst_28816 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28818__$1,inst_28816);
} else {
if((state_val_28819 === (15))){
var inst_28814 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
var statearr_28827_28874 = state_28818__$1;
(statearr_28827_28874[(2)] = inst_28814);

(statearr_28827_28874[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (21))){
var inst_28767 = (state_28818[(2)]);
var inst_28768 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28769 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28768);
var state_28818__$1 = (function (){var statearr_28828 = state_28818;
(statearr_28828[(7)] = inst_28767);

return statearr_28828;
})();
var statearr_28829_28875 = state_28818__$1;
(statearr_28829_28875[(2)] = inst_28769);

(statearr_28829_28875[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (31))){
var inst_28797 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28818__$1 = state_28818;
if(inst_28797){
var statearr_28830_28876 = state_28818__$1;
(statearr_28830_28876[(1)] = (34));

} else {
var statearr_28831_28877 = state_28818__$1;
(statearr_28831_28877[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (32))){
var inst_28806 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
var statearr_28832_28878 = state_28818__$1;
(statearr_28832_28878[(2)] = inst_28806);

(statearr_28832_28878[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (33))){
var inst_28793 = (state_28818[(2)]);
var inst_28794 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28795 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28794);
var state_28818__$1 = (function (){var statearr_28833 = state_28818;
(statearr_28833[(8)] = inst_28793);

return statearr_28833;
})();
var statearr_28834_28879 = state_28818__$1;
(statearr_28834_28879[(2)] = inst_28795);

(statearr_28834_28879[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (13))){
var inst_28752 = figwheel.client.heads_up.clear.call(null);
var state_28818__$1 = state_28818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28818__$1,(16),inst_28752);
} else {
if((state_val_28819 === (22))){
var inst_28773 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28774 = figwheel.client.heads_up.append_warning_message.call(null,inst_28773);
var state_28818__$1 = state_28818;
var statearr_28835_28880 = state_28818__$1;
(statearr_28835_28880[(2)] = inst_28774);

(statearr_28835_28880[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (36))){
var inst_28804 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
var statearr_28836_28881 = state_28818__$1;
(statearr_28836_28881[(2)] = inst_28804);

(statearr_28836_28881[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (29))){
var inst_28784 = (state_28818[(2)]);
var inst_28785 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28786 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28785);
var state_28818__$1 = (function (){var statearr_28837 = state_28818;
(statearr_28837[(9)] = inst_28784);

return statearr_28837;
})();
var statearr_28838_28882 = state_28818__$1;
(statearr_28838_28882[(2)] = inst_28786);

(statearr_28838_28882[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (6))){
var inst_28733 = (state_28818[(10)]);
var state_28818__$1 = state_28818;
var statearr_28839_28883 = state_28818__$1;
(statearr_28839_28883[(2)] = inst_28733);

(statearr_28839_28883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (28))){
var inst_28780 = (state_28818[(2)]);
var inst_28781 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28782 = figwheel.client.heads_up.display_warning.call(null,inst_28781);
var state_28818__$1 = (function (){var statearr_28840 = state_28818;
(statearr_28840[(11)] = inst_28780);

return statearr_28840;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28818__$1,(29),inst_28782);
} else {
if((state_val_28819 === (25))){
var inst_28778 = figwheel.client.heads_up.clear.call(null);
var state_28818__$1 = state_28818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28818__$1,(28),inst_28778);
} else {
if((state_val_28819 === (34))){
var inst_28799 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28818__$1 = state_28818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28818__$1,(37),inst_28799);
} else {
if((state_val_28819 === (17))){
var inst_28758 = (state_28818[(2)]);
var inst_28759 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28760 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28759);
var state_28818__$1 = (function (){var statearr_28841 = state_28818;
(statearr_28841[(12)] = inst_28758);

return statearr_28841;
})();
var statearr_28842_28884 = state_28818__$1;
(statearr_28842_28884[(2)] = inst_28760);

(statearr_28842_28884[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (3))){
var inst_28750 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28818__$1 = state_28818;
if(inst_28750){
var statearr_28843_28885 = state_28818__$1;
(statearr_28843_28885[(1)] = (13));

} else {
var statearr_28844_28886 = state_28818__$1;
(statearr_28844_28886[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (12))){
var inst_28746 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
var statearr_28845_28887 = state_28818__$1;
(statearr_28845_28887[(2)] = inst_28746);

(statearr_28845_28887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (2))){
var inst_28733 = (state_28818[(10)]);
var inst_28733__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28818__$1 = (function (){var statearr_28846 = state_28818;
(statearr_28846[(10)] = inst_28733__$1);

return statearr_28846;
})();
if(cljs.core.truth_(inst_28733__$1)){
var statearr_28847_28888 = state_28818__$1;
(statearr_28847_28888[(1)] = (5));

} else {
var statearr_28848_28889 = state_28818__$1;
(statearr_28848_28889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (23))){
var inst_28776 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28818__$1 = state_28818;
if(inst_28776){
var statearr_28849_28890 = state_28818__$1;
(statearr_28849_28890[(1)] = (25));

} else {
var statearr_28850_28891 = state_28818__$1;
(statearr_28850_28891[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (35))){
var state_28818__$1 = state_28818;
var statearr_28851_28892 = state_28818__$1;
(statearr_28851_28892[(2)] = null);

(statearr_28851_28892[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (19))){
var inst_28771 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28818__$1 = state_28818;
if(inst_28771){
var statearr_28852_28893 = state_28818__$1;
(statearr_28852_28893[(1)] = (22));

} else {
var statearr_28853_28894 = state_28818__$1;
(statearr_28853_28894[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (11))){
var inst_28742 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
var statearr_28854_28895 = state_28818__$1;
(statearr_28854_28895[(2)] = inst_28742);

(statearr_28854_28895[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (9))){
var inst_28744 = figwheel.client.heads_up.clear.call(null);
var state_28818__$1 = state_28818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28818__$1,(12),inst_28744);
} else {
if((state_val_28819 === (5))){
var inst_28735 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28818__$1 = state_28818;
var statearr_28855_28896 = state_28818__$1;
(statearr_28855_28896[(2)] = inst_28735);

(statearr_28855_28896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (14))){
var inst_28762 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28818__$1 = state_28818;
if(inst_28762){
var statearr_28856_28897 = state_28818__$1;
(statearr_28856_28897[(1)] = (18));

} else {
var statearr_28857_28898 = state_28818__$1;
(statearr_28857_28898[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (26))){
var inst_28788 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28818__$1 = state_28818;
if(inst_28788){
var statearr_28858_28899 = state_28818__$1;
(statearr_28858_28899[(1)] = (30));

} else {
var statearr_28859_28900 = state_28818__$1;
(statearr_28859_28900[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (16))){
var inst_28754 = (state_28818[(2)]);
var inst_28755 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28756 = figwheel.client.heads_up.display_exception.call(null,inst_28755);
var state_28818__$1 = (function (){var statearr_28860 = state_28818;
(statearr_28860[(13)] = inst_28754);

return statearr_28860;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28818__$1,(17),inst_28756);
} else {
if((state_val_28819 === (30))){
var inst_28790 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28791 = figwheel.client.heads_up.display_warning.call(null,inst_28790);
var state_28818__$1 = state_28818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28818__$1,(33),inst_28791);
} else {
if((state_val_28819 === (10))){
var inst_28748 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
var statearr_28861_28901 = state_28818__$1;
(statearr_28861_28901[(2)] = inst_28748);

(statearr_28861_28901[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (18))){
var inst_28764 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28765 = figwheel.client.heads_up.display_exception.call(null,inst_28764);
var state_28818__$1 = state_28818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28818__$1,(21),inst_28765);
} else {
if((state_val_28819 === (37))){
var inst_28801 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
var statearr_28862_28902 = state_28818__$1;
(statearr_28862_28902[(2)] = inst_28801);

(statearr_28862_28902[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (8))){
var inst_28740 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28818__$1 = state_28818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28818__$1,(11),inst_28740);
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
});})(c__23323__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23263__auto__,c__23323__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23264__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23264__auto____0 = (function (){
var statearr_28863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28863[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23264__auto__);

(statearr_28863[(1)] = (1));

return statearr_28863;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23264__auto____1 = (function (state_28818){
while(true){
var ret_value__23265__auto__ = (function (){try{while(true){
var result__23266__auto__ = switch__23263__auto__.call(null,state_28818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23266__auto__;
}
break;
}
}catch (e28864){if((e28864 instanceof Object)){
var ex__23267__auto__ = e28864;
var statearr_28865_28903 = state_28818;
(statearr_28865_28903[(5)] = ex__23267__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28904 = state_28818;
state_28818 = G__28904;
continue;
} else {
return ret_value__23265__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23264__auto__ = function(state_28818){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23264__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23264__auto____1.call(this,state_28818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23264__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23264__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23264__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23264__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23264__auto__;
})()
;})(switch__23263__auto__,c__23323__auto__,msg_hist,msg_names,msg))
})();
var state__23325__auto__ = (function (){var statearr_28866 = f__23324__auto__.call(null);
(statearr_28866[(6)] = c__23323__auto__);

return statearr_28866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23325__auto__);
});})(c__23323__auto__,msg_hist,msg_names,msg))
);

return c__23323__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23323__auto___28933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23323__auto___28933,ch){
return (function (){
var f__23324__auto__ = (function (){var switch__23263__auto__ = ((function (c__23323__auto___28933,ch){
return (function (state_28919){
var state_val_28920 = (state_28919[(1)]);
if((state_val_28920 === (1))){
var state_28919__$1 = state_28919;
var statearr_28921_28934 = state_28919__$1;
(statearr_28921_28934[(2)] = null);

(statearr_28921_28934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (2))){
var state_28919__$1 = state_28919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28919__$1,(4),ch);
} else {
if((state_val_28920 === (3))){
var inst_28917 = (state_28919[(2)]);
var state_28919__$1 = state_28919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28919__$1,inst_28917);
} else {
if((state_val_28920 === (4))){
var inst_28907 = (state_28919[(7)]);
var inst_28907__$1 = (state_28919[(2)]);
var state_28919__$1 = (function (){var statearr_28922 = state_28919;
(statearr_28922[(7)] = inst_28907__$1);

return statearr_28922;
})();
if(cljs.core.truth_(inst_28907__$1)){
var statearr_28923_28935 = state_28919__$1;
(statearr_28923_28935[(1)] = (5));

} else {
var statearr_28924_28936 = state_28919__$1;
(statearr_28924_28936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (5))){
var inst_28907 = (state_28919[(7)]);
var inst_28909 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28907);
var state_28919__$1 = state_28919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28919__$1,(8),inst_28909);
} else {
if((state_val_28920 === (6))){
var state_28919__$1 = state_28919;
var statearr_28925_28937 = state_28919__$1;
(statearr_28925_28937[(2)] = null);

(statearr_28925_28937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (7))){
var inst_28915 = (state_28919[(2)]);
var state_28919__$1 = state_28919;
var statearr_28926_28938 = state_28919__$1;
(statearr_28926_28938[(2)] = inst_28915);

(statearr_28926_28938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (8))){
var inst_28911 = (state_28919[(2)]);
var state_28919__$1 = (function (){var statearr_28927 = state_28919;
(statearr_28927[(8)] = inst_28911);

return statearr_28927;
})();
var statearr_28928_28939 = state_28919__$1;
(statearr_28928_28939[(2)] = null);

(statearr_28928_28939[(1)] = (2));


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
});})(c__23323__auto___28933,ch))
;
return ((function (switch__23263__auto__,c__23323__auto___28933,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23264__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23264__auto____0 = (function (){
var statearr_28929 = [null,null,null,null,null,null,null,null,null];
(statearr_28929[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23264__auto__);

(statearr_28929[(1)] = (1));

return statearr_28929;
});
var figwheel$client$heads_up_plugin_$_state_machine__23264__auto____1 = (function (state_28919){
while(true){
var ret_value__23265__auto__ = (function (){try{while(true){
var result__23266__auto__ = switch__23263__auto__.call(null,state_28919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23266__auto__;
}
break;
}
}catch (e28930){if((e28930 instanceof Object)){
var ex__23267__auto__ = e28930;
var statearr_28931_28940 = state_28919;
(statearr_28931_28940[(5)] = ex__23267__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28941 = state_28919;
state_28919 = G__28941;
continue;
} else {
return ret_value__23265__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23264__auto__ = function(state_28919){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23264__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23264__auto____1.call(this,state_28919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23264__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23264__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23264__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23264__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23264__auto__;
})()
;})(switch__23263__auto__,c__23323__auto___28933,ch))
})();
var state__23325__auto__ = (function (){var statearr_28932 = f__23324__auto__.call(null);
(statearr_28932[(6)] = c__23323__auto___28933);

return statearr_28932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23325__auto__);
});})(c__23323__auto___28933,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23323__auto__){
return (function (){
var f__23324__auto__ = (function (){var switch__23263__auto__ = ((function (c__23323__auto__){
return (function (state_28947){
var state_val_28948 = (state_28947[(1)]);
if((state_val_28948 === (1))){
var inst_28942 = cljs.core.async.timeout.call(null,(3000));
var state_28947__$1 = state_28947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28947__$1,(2),inst_28942);
} else {
if((state_val_28948 === (2))){
var inst_28944 = (state_28947[(2)]);
var inst_28945 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28947__$1 = (function (){var statearr_28949 = state_28947;
(statearr_28949[(7)] = inst_28944);

return statearr_28949;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28947__$1,inst_28945);
} else {
return null;
}
}
});})(c__23323__auto__))
;
return ((function (switch__23263__auto__,c__23323__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23264__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23264__auto____0 = (function (){
var statearr_28950 = [null,null,null,null,null,null,null,null];
(statearr_28950[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23264__auto__);

(statearr_28950[(1)] = (1));

return statearr_28950;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23264__auto____1 = (function (state_28947){
while(true){
var ret_value__23265__auto__ = (function (){try{while(true){
var result__23266__auto__ = switch__23263__auto__.call(null,state_28947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23266__auto__;
}
break;
}
}catch (e28951){if((e28951 instanceof Object)){
var ex__23267__auto__ = e28951;
var statearr_28952_28954 = state_28947;
(statearr_28952_28954[(5)] = ex__23267__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28955 = state_28947;
state_28947 = G__28955;
continue;
} else {
return ret_value__23265__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23264__auto__ = function(state_28947){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23264__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23264__auto____1.call(this,state_28947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23264__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23264__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23264__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23264__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23264__auto__;
})()
;})(switch__23263__auto__,c__23323__auto__))
})();
var state__23325__auto__ = (function (){var statearr_28953 = f__23324__auto__.call(null);
(statearr_28953[(6)] = c__23323__auto__);

return statearr_28953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23325__auto__);
});})(c__23323__auto__))
);

return c__23323__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23323__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__23324__auto__ = (function (){var switch__23263__auto__ = ((function (c__23323__auto__,figwheel_version,temp__5720__auto__){
return (function (state_28962){
var state_val_28963 = (state_28962[(1)]);
if((state_val_28963 === (1))){
var inst_28956 = cljs.core.async.timeout.call(null,(2000));
var state_28962__$1 = state_28962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28962__$1,(2),inst_28956);
} else {
if((state_val_28963 === (2))){
var inst_28958 = (state_28962[(2)]);
var inst_28959 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_28960 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_28959);
var state_28962__$1 = (function (){var statearr_28964 = state_28962;
(statearr_28964[(7)] = inst_28958);

return statearr_28964;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28962__$1,inst_28960);
} else {
return null;
}
}
});})(c__23323__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__23263__auto__,c__23323__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23264__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23264__auto____0 = (function (){
var statearr_28965 = [null,null,null,null,null,null,null,null];
(statearr_28965[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23264__auto__);

(statearr_28965[(1)] = (1));

return statearr_28965;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23264__auto____1 = (function (state_28962){
while(true){
var ret_value__23265__auto__ = (function (){try{while(true){
var result__23266__auto__ = switch__23263__auto__.call(null,state_28962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23266__auto__;
}
break;
}
}catch (e28966){if((e28966 instanceof Object)){
var ex__23267__auto__ = e28966;
var statearr_28967_28969 = state_28962;
(statearr_28967_28969[(5)] = ex__23267__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28970 = state_28962;
state_28962 = G__28970;
continue;
} else {
return ret_value__23265__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23264__auto__ = function(state_28962){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23264__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23264__auto____1.call(this,state_28962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23264__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23264__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23264__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23264__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23264__auto__;
})()
;})(switch__23263__auto__,c__23323__auto__,figwheel_version,temp__5720__auto__))
})();
var state__23325__auto__ = (function (){var statearr_28968 = f__23324__auto__.call(null);
(statearr_28968[(6)] = c__23323__auto__);

return statearr_28968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23325__auto__);
});})(c__23323__auto__,figwheel_version,temp__5720__auto__))
);

return c__23323__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__28971){
var map__28972 = p__28971;
var map__28972__$1 = (((((!((map__28972 == null))))?(((((map__28972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28972):map__28972);
var file = cljs.core.get.call(null,map__28972__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__28972__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__28972__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__28974 = "";
var G__28974__$1 = (cljs.core.truth_(file)?[G__28974,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__28974);
var G__28974__$2 = (cljs.core.truth_(line)?[G__28974__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__28974__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__28974__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__28974__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28975){
var map__28976 = p__28975;
var map__28976__$1 = (((((!((map__28976 == null))))?(((((map__28976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28976):map__28976);
var ed = map__28976__$1;
var exception_data = cljs.core.get.call(null,map__28976__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28976__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_28979 = (function (){var G__28978 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28978)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__28978;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_28979);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28980){
var map__28981 = p__28980;
var map__28981__$1 = (((((!((map__28981 == null))))?(((((map__28981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28981):map__28981);
var w = map__28981__$1;
var message = cljs.core.get.call(null,map__28981__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/client/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/client/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28983 = cljs.core.seq.call(null,plugins);
var chunk__28984 = null;
var count__28985 = (0);
var i__28986 = (0);
while(true){
if((i__28986 < count__28985)){
var vec__28993 = cljs.core._nth.call(null,chunk__28984,i__28986);
var k = cljs.core.nth.call(null,vec__28993,(0),null);
var plugin = cljs.core.nth.call(null,vec__28993,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28999 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28983,chunk__28984,count__28985,i__28986,pl_28999,vec__28993,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28999.call(null,msg_hist);
});})(seq__28983,chunk__28984,count__28985,i__28986,pl_28999,vec__28993,k,plugin))
);
} else {
}


var G__29000 = seq__28983;
var G__29001 = chunk__28984;
var G__29002 = count__28985;
var G__29003 = (i__28986 + (1));
seq__28983 = G__29000;
chunk__28984 = G__29001;
count__28985 = G__29002;
i__28986 = G__29003;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28983);
if(temp__5720__auto__){
var seq__28983__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28983__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28983__$1);
var G__29004 = cljs.core.chunk_rest.call(null,seq__28983__$1);
var G__29005 = c__4550__auto__;
var G__29006 = cljs.core.count.call(null,c__4550__auto__);
var G__29007 = (0);
seq__28983 = G__29004;
chunk__28984 = G__29005;
count__28985 = G__29006;
i__28986 = G__29007;
continue;
} else {
var vec__28996 = cljs.core.first.call(null,seq__28983__$1);
var k = cljs.core.nth.call(null,vec__28996,(0),null);
var plugin = cljs.core.nth.call(null,vec__28996,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29008 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28983,chunk__28984,count__28985,i__28986,pl_29008,vec__28996,k,plugin,seq__28983__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29008.call(null,msg_hist);
});})(seq__28983,chunk__28984,count__28985,i__28986,pl_29008,vec__28996,k,plugin,seq__28983__$1,temp__5720__auto__))
);
} else {
}


var G__29009 = cljs.core.next.call(null,seq__28983__$1);
var G__29010 = null;
var G__29011 = (0);
var G__29012 = (0);
seq__28983 = G__29009;
chunk__28984 = G__29010;
count__28985 = G__29011;
i__28986 = G__29012;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__29014 = arguments.length;
switch (G__29014) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__29015_29020 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29016_29021 = null;
var count__29017_29022 = (0);
var i__29018_29023 = (0);
while(true){
if((i__29018_29023 < count__29017_29022)){
var msg_29024 = cljs.core._nth.call(null,chunk__29016_29021,i__29018_29023);
figwheel.client.socket.handle_incoming_message.call(null,msg_29024);


var G__29025 = seq__29015_29020;
var G__29026 = chunk__29016_29021;
var G__29027 = count__29017_29022;
var G__29028 = (i__29018_29023 + (1));
seq__29015_29020 = G__29025;
chunk__29016_29021 = G__29026;
count__29017_29022 = G__29027;
i__29018_29023 = G__29028;
continue;
} else {
var temp__5720__auto___29029 = cljs.core.seq.call(null,seq__29015_29020);
if(temp__5720__auto___29029){
var seq__29015_29030__$1 = temp__5720__auto___29029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29015_29030__$1)){
var c__4550__auto___29031 = cljs.core.chunk_first.call(null,seq__29015_29030__$1);
var G__29032 = cljs.core.chunk_rest.call(null,seq__29015_29030__$1);
var G__29033 = c__4550__auto___29031;
var G__29034 = cljs.core.count.call(null,c__4550__auto___29031);
var G__29035 = (0);
seq__29015_29020 = G__29032;
chunk__29016_29021 = G__29033;
count__29017_29022 = G__29034;
i__29018_29023 = G__29035;
continue;
} else {
var msg_29036 = cljs.core.first.call(null,seq__29015_29030__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29036);


var G__29037 = cljs.core.next.call(null,seq__29015_29030__$1);
var G__29038 = null;
var G__29039 = (0);
var G__29040 = (0);
seq__29015_29020 = G__29037;
chunk__29016_29021 = G__29038;
count__29017_29022 = G__29039;
i__29018_29023 = G__29040;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29045 = arguments.length;
var i__4731__auto___29046 = (0);
while(true){
if((i__4731__auto___29046 < len__4730__auto___29045)){
args__4736__auto__.push((arguments[i__4731__auto___29046]));

var G__29047 = (i__4731__auto___29046 + (1));
i__4731__auto___29046 = G__29047;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29042){
var map__29043 = p__29042;
var map__29043__$1 = (((((!((map__29043 == null))))?(((((map__29043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29043):map__29043);
var opts = map__29043__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29041){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29041));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29048){if((e29048 instanceof Error)){
var e = e29048;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29048;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__29049){
var map__29050 = p__29049;
var map__29050__$1 = (((((!((map__29050 == null))))?(((((map__29050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29050):map__29050);
var msg_name = cljs.core.get.call(null,map__29050__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1581396567412
