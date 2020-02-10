(ns simpleexample.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.core]))

(defonce click-count (r/atom 0))

(defn fib [n]
  (if (or (= n 1) (= n 0)) 1 (+ (fib (- n 1)) (fib (- n 2)))))

(defn click_text []
  [:div {:id "fib_clj"
    :on-click #(swap! click-count inc)}
  ;  "I have been clicked " (fib @click-count) " times."])
   (fib @click-count)])

(defn click_button []
  [:input {:id "fib_but"
            :type "button"
            :value @click-count
            ; :on-click #((swap! click-count inc) (js/fib_wasm @click-count))}])
            :on-click #(swap! click-count inc)}])

(defn greeting [message]
  [:h1 message])

(defn simple-example []
  [:div
   [greeting "This is fibonacci"]
   [click_text]
   [click_button]])

(defn ^:export run []
  (rdom/render [simple-example] (js/document.getElementById "app")))