<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;

class ArticleController extends Controller
{
    /**
     * Fetch all articles for admin section
     * 
     * @return Article
     */
    public function adminGetArticles() {
        return Article::all();
    }

    /**
     * Fetch a particular article for admin section
     * 
     * @param integer $id
     * @return Article
     */
    public function adminGetArticle($id) {
        return Article::find($id);
    }
}
