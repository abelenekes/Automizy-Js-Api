<section>
    <h3>Token</h3>  
    <div class='module-description'>
        These are special functions which can be used on tokens.<br>
        There is a refresh loop running in the background, checking every 30 seconds if the access token is expired or expires in the following 120 seconds. If the token is close to its expiration time, this loop will generate a new one. If it expires the user won't be able to access the server until he gets a new one.<br>
    </div>
    <table class='functions-table'>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>refreshLoopStop</h3>  
                    <div class='function-description'>
                        Use this function to stop the above described refresh loop.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <pre class='prettyprint linenums'>
//Stopping the loop - the user won't get a new token
$AA.token().refreshLoopStop();
                </pre>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>refreshLoopStart</h3>  
                    <div class='function-description'>
                        Use this function to start the above described refresh loop.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <pre class='prettyprint linenums'>
//Starting the loop 
$AA.token().refreshLoopStart();
                </pre>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>refreshLoopRestart</h3>  
                    <div class='function-description'>
                        Use this function to restart the above described refresh loop.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <pre class='prettyprint linenums'>
//Restarting the loop
$AA.token().refreshLoopRestart();
                </pre>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>get</h3>  
                    <div class='function-description'>
                        Use this function to get the acces token.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <pre class='prettyprint linenums'>
//Getting the acces token
$AA.token().get();
                </pre>
                <div class="function-returns"> Returns: <code>String</code></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>refresh</h3>  
                    <div class='function-description'>
                        Use this function to refresh the access token.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <pre class='prettyprint linenums'>
//Refreshing the access token
$AA.tokens.refresh();
                </pre>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>error</h3>
                    <div class='function-description'>
                        This function is called when an error occures during an API request. This can happen if you call a module or basic function with bad parameters.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>func</code>: The function you want to invoke when an error occures.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <pre class='prettyprint linenums'>
//Setting the error function
$AA.token().error(function(){
    alert('Error occured!');
});
                </pre>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>success</h3>
                    <div class='function-description'>
                        This function is called when an API request is successful.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>func</code>: The function you want to invoke in case of success.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <pre class='prettyprint linenums'>
//Setting the success function
$AA.token().success(function(){
    alert('Success');
});
                </pre>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>loginError</h3>  
                    <div class='function-description'>
                        This function is called when the user tries to log in with invalid data. (For example logging in with empty password field.)<br>
                        Please note that while the input is invalid, no data will be sent to the server.
                        <div class='function-paramenters'>Parameters:</div>
                        <code>func</code>: The function you want to invoke when a login error occures.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <pre class='prettyprint linenums'>
//Setting the loginError function
$AA.token().loginError(function(){
    alert('Invalid input!');
});
                </pre>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>loginAjaxError</h3>  
                    <div class='function-description'>
                        This function is called when the user tries to log in with incorrect data.<br>
                        In this case the server will reject the login request.
                        <div class='function-paramenters'>Parameters:</div>
                        <code>func</code>: The function you want to invoke when the server rejects a login request.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <pre class='prettyprint linenums'>
//Setting the loginAjaxError function
$AA.token().loginAjaxError(function(){
    alert('Wrong user name or password!');
});
                </pre>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>loginAjaxSuccess</h3>  
                    <div class='function-description'>
                        This function is called when the login process is successful.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>func</code>: The function you want to invoke when the login process is successful.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <pre class='prettyprint linenums'>
//Setting the loginAjaxSuccess function
$AA.token().loginAjaxSuccess(function(){
    alert('Logged in successfully!');
});
                </pre>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>refreshAjaxError</h3>  
                    <div class='function-description'>
                        This function is called when the user's refresh token is invalid/expired.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>func</code>: The function you want to invoke.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <pre class='prettyprint linenums'>
//Setting the refreshAjaxError function
$AA.token().refreshAjaxError(function(){
    alert('Refresh token is invalid!');
});
                </pre>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>refreshAjaxSuccess</h3>  
                    <div class='function-description'>
                        This function is called when the user gets a new refresh token.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>func</code>: The function you want to invoke.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <pre class='prettyprint linenums'>
//Setting the refreshAjaxSuccess function
$AA.token().refreshAjaxSuccess(function(){
    alert('Token refreshed!');
});
                </pre>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>passwordLogin</h3>  
                    <div class='function-description'>
                        Use this function to log in using user name and password.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>obj</code>: The object containing the user name and password.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums' data-name='request'>
//Logging in with username and password
$AA.token().passwordLogin({
    username: "john.doe@gmail.com",
    password: "password123"
});
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
                <div class="function-returns"> Returns: <a class='jqrxhr-link' href="http://api.jquery.com/jQuery.ajax/#jqXHR">jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>credentialsLogin</h3>  
                    <div class='function-description'>
                        Use this function to log in with cliendId and clientSecret.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>obj</code>: The object containing the cliendId and clientSecret key-value pairs.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums' data-name='request'>
//Logging in with cliendId and clientSecret
$AA.token().credentialsLogin({
    clientId: "test@gmail.com/accountname/api",
    clientSecret: "aB1c23DE4fGh5i67JKlmN89op"
}); //returns object with refresh and access token
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
                <div class="function-returns"> Returns: <a class='jqrxhr-link' href="http://api.jquery.com/jQuery.ajax/#jqXHR">jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>login</h3>  
                    <div class='function-description'>
                        Use this function to log in with username and password or cliendId and clientSecret key-value pairs.<br>
                        The program can decide which type of login you use based on the object keys.
                        <div class='function-paramenters'>Parameters:</div>
                        <code>obj</code>: The object containing the login data.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Logging in with username and password or cliendId and clientSecret
$AA.token().login({
    username: "john.doe@gmail.com",
    password: "password123"
}); //returns object with refresh and access token

$AA.token().login({
    clientId: "test@gmail.com/accountname/api",
    clientSecret: "aB1c23DE4fGh5i67JKlmN89op"
}); //returns object with refresh and access token
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
                <div class="function-returns"> Returns: <a class='jqrxhr-link' href="http://api.jquery.com/jQuery.ajax/#jqXHR">jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>logout</h3>  
                    <div class='function-description'>
                        Use this function to log out.<br>
                        All tokens will be deleted.
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <pre class='prettyprint linenums'>
//Logging out
$AA.token().logout();
                </pre>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>loggedIn</h3>  
                    <div class='function-description'>
                        Use this function to check if you're logged in.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <pre class='prettyprint linenums'>
//Checking of you're logged in
$AA.token().loggedIn(); //returns true or false
                </pre>
                <div class="function-returns"> Returns: <code>Boolean</code></div>
            </td>
        </tr>
    </table>
</section>
