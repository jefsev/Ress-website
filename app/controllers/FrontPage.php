<?php
namespace Ress\Controllers;

use BoxyBird\Inertia\Inertia;
use Ress\Inc\CollectYoastMeta;
use StoutLogic\AcfBuilder\FieldsBuilder;

class FrontPage {

    public function acf_fields() {
        $hero = new FieldsBuilder('hero');
        $hero
            ->addText('title_start')
                ->setWidth(33)
            ->addText('title_yellow')
                ->setWidth(33)
            ->addText('title_end')
                ->setWidth(33)
            ->addText('subtitle')
            ->addLink('button')
            ->setLocation('page_type', '==', 'front_page');
           
        return $hero;
    }

    public static function index() {
        return Inertia::render('Index', [
            'yoast_meta' => CollectYoastMeta::collectMeta(get_the_ID()),
            'title' => get_the_title(), 
            'content' => get_the_content(),
            'acf' => get_fields(),
        ]);
    }
}