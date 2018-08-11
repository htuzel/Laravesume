<?php

namespace App\Http\Controllers;

use Mail;
use Storage;
use App\User;
use Illuminate\Http\Request;


class SendMailController extends Controller
{

    public function html_email(Request $request){
        $file = $request->image;
        $extension =$file->getClientOriginalExtension();

        Storage::disk('local')->putFileAs('public', $file, "deneme." . $extension);
        $data = array('name'=>$request->input('name'),'email'=>$request->input('email'),'description'=>$request->input('description'));

        if($extension == "pdf")
        {
            Mail::send('mail', $data, function($message) {
                $message->to('hayreddintuzel@gmail.com', 'Tutorials Point')->subject
                    ('Laravel Testing Mail with Attachment');
                $message->attach("storage/deneme.pdf");
                $message->from('me@hayreddintuzel.com','Hayreddin Tüzel');

            });
        } else if($extension == "doc")
        {
            Mail::send('mail', $data, function($message) {
                $message->to('hayreddintuzel@gmail.com', 'Tutorials Point')->subject
                    ('Laravel Testing Mail with Attachment');
                $message->attach("storage/deneme.doc");
                $message->from('me@hayreddintuzel.com','Hayreddin Tüzel');

            });
        } else if($extension == "docx")
        {
            Mail::send('mail', $data, function($message) {
                $message->to('hayreddintuzel@gmail.com', 'Tutorials Point')->subject
                    ('Laravel Testing Mail with Attachment');
                $message->attach("storage/deneme.docx");
                $message->from('me@hayreddintuzel.com','Hayreddin Tüzel');

            });
        }

        return "success";
    }

}
