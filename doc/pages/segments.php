<section>
    <h2>Segments</h2>  
    <div class='module-description'>
        These are special functions which can be used on segments.<br>
        In addition, all <a class='basicFunctionsLink' href="#BasicFunctions">Basic Functions</a> can be invoked on segments.<br>
        To use these functions you have to invoke the <b>$AA.segments()</b> method first.<br>
        To see detailed structure and functionality of segments, check the <a href="<?= $config['urls']['restApiDoc'] ?>#Segments" target='_blank'>Automizy REST API Docs</a>
    </div>
    <table class='functions-table'>
        <!--
        
        <tr>
            <td class='function-body'>
                <article>
                    <h3>calculateByArray</h3>
                    <div class='function-description'>
                        Use this function to .<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>obj</code>: the object<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <pre class='prettyprint linenums'>
//Write some examples here!
                </pre>
                <div class="function-returns"> Returns: <a class='jqrxhr-link' href="http://api.jquery.com/jQuery.ajax/#jqXHR" target="blank">jqXHR</a></div>
            </td>
        </tr>
        -->
        <tr>
            <td class='function-body'>
                <article>
                    <h3>calculateById</h3>
                    <div class='function-description'>
                        Use this function to calculate a segment wihtout saving.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the segment you want to calculate.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums' data-name='request'>
//Calculating the first segment without save
$AA.segments().calculateById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
{
numberOfContacts: "100"
}
                </pre>
                <div class="function-returns"> Returns: <a class='jqrxhr-link' href="http://api.jquery.com/jQuery.ajax/#jqXHR" target="blank">jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>calculateAndSave</h3>
                    <div class='function-description'>
                        Use this function to calculate a segment with saving.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the segment you want to calculate.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <pre class='prettyprint linenums'>
//Calculating the first segment with save
$AA.segments().calculateAndSave(1);
                </pre>
                <div class="function-returns"> Returns: <code>Boolean</code></div>
            </td>
        </tr>
    </table>
</section>
