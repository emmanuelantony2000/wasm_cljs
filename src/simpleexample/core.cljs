(ns simpleexample.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

(defonce click-count (r/atom 0))

(defn fib [n]
  (if (or (= n 1) (= n 0)) 1 (+ (fib (- n 1)) (fib (- n 2)))))

(defn click_text []
  [:div {:id "fib_clj"
  :class "text"
    :on-click #(swap! click-count inc)}
   (fib @click-count)])

(defn click_button []
  [:input {:id "fib_but"
            :type "button"
            :class "btn btn-primary btn-lg btn-block"
            :value @click-count
            :on-click #(swap! click-count inc)}])

(defn simple-example []
  [:div
   [click_text]
   [click_button]])

(defn ^:export run []
  (rdom/render [simple-example] (js/document.getElementById "app")))