<?php
use BoxyBird\Inertia\Inertia;

add_action('init', function () {
    //Check if theme nav is enabled
    $nav_items = [];
    $nav_items_1 = [];
    $nav_items_2 = [];
    if(has_nav_menu('primary_navigation')) {
        $nav_items = wp_get_nav_menu_items('menu-1');
    }
    if(has_nav_menu('secondary_navigation')) {
        $nav_items_1 = wp_get_nav_menu_items('menu-2');
    }
    if(has_nav_menu('tertiary_navigation')) {
        $nav_items_2 = wp_get_nav_menu_items('menu-3');
    }
    //Synchronously using array
    Inertia::share([
        'custom_logo' => get_custom_logo_url(),
        'primary_menu' => array_map(function ($menu_item) {
            return [
                'id'   => $menu_item->ID,
                'link' => $menu_item->url,
                'name' => $menu_item->title,
            ];
        }, $nav_items),
        'seconday_menu' => array_map(function ($menu_item) {
            return [
                'id'   => $menu_item->ID,
                'link' => $menu_item->url,
                'name' => $menu_item->title,
            ];
        }, $nav_items_1),
        'tertiary_menu' => array_map(function ($menu_item) {
            return [
                'id'   => $menu_item->ID,
                'link' => $menu_item->url,
                'name' => $menu_item->title,
            ];
        }, $nav_items_2)
    ]);
});