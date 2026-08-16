import React from 'react'
import {Editor} from '@tinymce/tinymce-react';
import {Controller} from 'react-hook-form';
import conf from '../../conf/conf'

function RTE({name, control, label, defaultValue=""}) {
  const apikey = import.meta.env.VITE_TINYMCE_API;
  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'>
      {label}</label>}

      <Controller
      name={name || "content"}
      control={control}
      render={({field: {onChange}}) => (
          <Editor
          onEditorChange={onChange}
          initialValue={defaultValue}
          apiKey={apikey}
          init={{
            initialValue: defaultValue,
            height: 500,
            menubar: false,
            skin: 'oxide-dark',
            content_css: 'dark',
            plugins: [
              // Core editing features
              'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',],
            toolbar: 'undo redo | tinymceai-chat tinymceai-quickactions tinymceai-review | blocks fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
            tinymceai_token_provider: async () => {
              await fetch(`https://demo.api.tiny.cloud/1/${apikey}/auth/random`, { method: "POST", credentials: "include" });
              return { token: await fetch(`https://demo.api.tiny.cloud/1/${apikey}/jwt/tinymceai`, { credentials: "include" }).then(r => r.text()) };
            },
            uploadcare_public_key: '6a0dfe8e87f9db385f75',
          }}
        />  
    )}
    />

    </div>
  )
}

export default RTE 