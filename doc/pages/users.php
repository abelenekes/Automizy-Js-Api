<section>
    <h1>Users</h1>  
    <div class='module-description'>
        All <a class='basicFunctionsLink' href="#BasicFunctions">Basic Functions</a> can be invoked on users.<br>
        To use the functions you have to invoke the <b>$AA.users()</b> method first.<br>
        To see detailed structure and functionality of users, check the <a href="<?= $config['urls']['restApiDoc'] ?>#Users" target='_blank'>Automizy REST API Docs</a>
    </div>
    <table class='functions-table'>
        <tr>
            <td class='function-body'>
                <article>
                    <h2>switch</h2>
                    <div class='function-description'>
                        Use this function to switch user.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>user</code>: The user name.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Switch to "myotheruser" account
$AA.users().switch('myotheruser');
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//The content of the response:
{
    access_token: "414a560e13c945f1bf0c384e36899d68197b7618"
    expires_in: 600 //access token expiration time in seconds
    refresh_token: "fb4534a7829f684ddf99bab0ccb31974c172556f"
    scope: null
    token_type: "Bearer"
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
    </table>
</section>
