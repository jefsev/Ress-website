<?php
namespace Ress\Controllers;

use BoxyBird\Inertia\Inertia;
use Ress\Inc\CollectYoastMeta;

class Page {
    public static function index() {
        $content = apply_filters( 'the_content', get_the_content());

        return Inertia::render('Page', [
            'yoast_meta' => CollectYoastMeta::collectMeta(get_the_ID()),
            'title' => get_the_title(),
            'content' => $content,
        ]);
    }
}