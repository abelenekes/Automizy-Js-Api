<section>
    <h1>Basic Functions</h1>  
    <div class='module-description'>
        These are global functions which can be used on all modules.
    </div>
    <table class='functions-table'>
        <tr>
            <td class='function-body'>
                <article>
                    <h2>insert</h2>  
                    <div class='function-description'>
                        Use this function to insert an element.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>obj</code>: the object representing the element you want to insert.<br>
                        <code>async</code>: Not required, (true by default). Set it false to execute the insertion synchronously.
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums' data-name='request'>
//Inserting a new segment
$AA.segments().insert({name: 'new segment'}, true)
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//Response is the new segment object
{
    id:3,
    name:"new segment",
    createDate:{
        date:"2015-05-07 13:01:26",
        timezone_type:3,
        timezone:"Europe\/Budapest"
    },
    subscriberCount:0,
    conditions:[],
    _links:{
        self:{
            href:"https:\/\/api.automizy.com\/segments"
        },
        calculate:{
            href:"https:\/\/api.automizy.com\/segments\/3\/calculate"
        }
    }
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h2>insertSync</h2>  
                    <div class='function-description'>
                        Use this function to insert an element sychronously. (The browser will wait for the response.)<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>obj</code>: the object representing the element you want to insert.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums' data-name='request'>
//Inserting a new segment sychronously
$AA.segments().insertSync({name: 'new segment'})
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//Response is the new segment object
{
    id:3,
    name:"new segment",
    createDate:{
        date:"2015-05-07 13:01:26",
        timezone_type:3,
        timezone:"Europe\/Budapest"
    },
    subscriberCount:0,
    conditions:[],
    _links:{
        self:{
            href:"https:\/\/api.automizy.com\/segments"
        },
        calculate:{
            href:"https:\/\/api.automizy.com\/segments\/3\/calculate"
        }
    }
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h2>update</h2>  
                    <div class='function-description'>
                        Use this function to update a field of an element.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>obj</code>: The field you want to update and the new value.<br>
                        <code>id</code>: The id of the element you want to update.<br> 
                        <code>async</code>: Not required, (true by default). Set it false to execute the update process synchronously.
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums' data-name='request'>
//Changing the 'name' property of the first segment to 'First segment' asychronously
$AA.segments().update({'name':'First segment'},1, false);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//Response is the updated segment
{
    id:1,
    name:"First segment",
    createDate:{
        date:"2015-05-07 13:01:26",
        timezone_type:3,
        timezone:"Europe\/Budapest"
    },
    subscriberCount:0,
    conditions:[],
    _links:{
        self:{
            href:"https:\/\/api.automizy.com\/segments"
        },
        calculate:{
            href:"https:\/\/api.automizy.com\/segments\/3\/calculate"
        }
    }
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h2>updateSync</h2>  
                    <div class='function-description'>
                        Use this function to update a field of an element sychronously. (The browser will wait for the response.)<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>obj</code>: The field you want to update and the new value.<br>
                        <code>id</code>: The id of the element you want to update.<br> 
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums' data-name='request'>
//Changing the 'name' property of the first segment to 'First segment' sychronously
$AA.segments().update({'name':'First segment'},1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//Response is the updated segment
{
    id:1,
    name:"First segment",
    createDate:{
        date:"2015-05-07 13:01:26",
        timezone_type:3,
        timezone:"Europe\/Budapest"
    },
    subscriberCount:0,
    conditions:[],
    _links:{
        self:{
            href:"https:\/\/api.automizy.com\/segments"
        },
        calculate:{
            href:"https:\/\/api.automizy.com\/segments\/3\/calculate"
        }
    }
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h2>get</h2>  
                    <div class='function-description'>
                        Use this function to get the result of any query.<br>
                        The result will be a jqXHR containing the elements which met the query's conditions.<br>
                        There are several modifier methods which can be used before invoking the get() method:<br>
                        <ul>
                            <li><code>fields('field1, field2')</code>: If set, the response will contain only the value of the given fields.</li>
                            <li><code>limit(X)</code>: If set, only the first X results will be returned.</li>
                            <li><code>links('link1,link')</code>:  If set, only given links of the elements will appear in the result, all other links will be hidden.</li>
                            <li><code>orderBy('fieldName')</code>: If set, the response will be ordered by the given field name. If you use ths funciton, you must invoke the orderDir() function too.</li>
                            <li><code>orderDir('orderDirection')</code>: If set ('asc' || 'desc'), the response will be ordered by the given direction. If you use ths funciton, you must invoke the orderBy() function too.</li>
                            <li><code>order('orderBy:orderDir')</code>: The composite function of the before mentioned ones. If set, the response will be ordered by the given field name and order direction.</li>
                            <li><code>page(pageNum)</code>: If set, the result will contain only those elements which can be found on the particular page.</li>
                            <li><code>where(conditionsArr)</code>: You can give condition to the query represented by an array.</li>
                        </ul>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums' data-name='request'>
//Get all segments
$AA.segments().get();
//Get all segments, with only the 'name' field. 
$AA.segments().fields('name').get();
//Get the first 3 segments
$AA.segments().limit(3).get();
//Get all segments with only 'self' link
$AA.segments().links('self').get();
//Order the segments by create date in ascending order
$AA.segments().orderBy('createDate').orderDir('asc').get();
$AA.segments().order('createDate:asc').get();
//Get all segments from the first page
$AA.segments().page(1).get();
//Get all segments that have 'test' in their name
$AA.segments().where([
    [
        ['name', 'in', '%test%']
    ]
]).get();
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//Response is an array containing the requested segments
{
    segments:[
        //First segment
        {
            id:1,
            name:"First segment",
            createDate:{...},
            subscriberCount:0,
            conditions:[],
            _links:{...}
            }
        },
        //Following segments
        {..},
        {..},
        {..}
    ]
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h2>getSync</h2>  
                    <div class='function-description'>
                        This function is the same as the get() method, but it works synchronously. (The browser will wait for the response.)<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums' data-name='request'>
//Get all segments synchronously
$AA.segments().getSync();
                </pre>
                <pre class='prettyprint linenums' data-name='response'>

//Response is an array containing the requested segments
{
    segments:[
        //First segment
        {
            id:1,
            name:"First segment",
            createDate:{...},
            subscriberCount:0,
            conditions:[],
            _links:{...}
            }
        },
        //Following segments
        {..},
        {..},
        {..}
    ]
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h2>getAll</h2>  
                    <div class='function-description'>
                        Use this function to get all records in of the particular module.<br>
                        If you use this function, it will ignore any modifier functions (like limit or where) and will return all results.
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums' data-name='request'>
//Getting all segments
$AA.segments().limit(1).getAll(); //limit will be ignored!
                </pre>
                <pre class='prettyprint linenums' data-name='response'>

//Response is an array containing all segments
{
    segments:[
        //First segment
        {
            id:1,
            name:"First segment",
            createDate:{...},
            subscriberCount:0,
            conditions:[],
            _links:{...}
            }
        },
        //Following segments
        {..},
        {..},
        {..}
    ]
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h2>getAllIdNamePair</h2>  
                    <div class='function-description'>
                        Use this function to return all elements with their id-s and with their value in the selected field.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>fieldName</code>: The field whom value you want to get.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums' data-name='request'>
//Getting all segments with their id and name property
$AA.segments().getAllIdNamePair('name'); 
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//Response is an array
[
    //First segment
    [
        0: 1,   //id
        1: "test1"  //value of selected field (name)
    ],
    //Second segment
    [
        0: 2,
        1: "new segment"
    ],
]
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h2>getFieldById</h2>  
                    <div class='function-description'>
                        Use this function to get the value of the requested field of the record with the particular id.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the record you want to inspect.<br>
                        <code>fieldName</code>: The name of the fild you want to get.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums' data-name='request'>
//Returning the name property of the first segment
$AA.segments().getFieldById(1, 'name');
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//Response is only the requested value
"test1"
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h2>getRecordById</h2>  
                    <div class='function-description'>
                        Use this function to get a record with the particular id.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the record you want to get.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums' data-name='request'>
//Getting the first segment
$AA.segments().getRecordById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>//Response is the updated segment
{
    id:1,
    name:"First segment",
    createDate:{
        date:"2015-05-07 13:01:26",
        timezone_type:3,
        timezone:"Europe\/Budapest"
    },
    subscriberCount:0,
    conditions:[],
    _links:{
        self:{
            href:"https:\/\/api.automizy.com\/segments"
        },
        calculate:{
            href:"https:\/\/api.automizy.com\/segments\/3\/calculate"
        }
    }
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h2>delete</h2>  
                    <div class='function-description'>
                        Use this function to remove an element by id.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the item you want to remove.<br>
                        <code>async</code>: Not required, (true by default) set it false to execute the removal synchronously.
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums' data-name='request'>
//Removing the 3rd segment asynchronously
$AA.segments().delete(3)
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
""
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h2>deleteSync</h2>  
                    <div class='function-description'>
                        Use this function to remove an element by id synchronously.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the item you want to remove.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums' data-name='request'>
//Removing the 3rd segment synchronously
$AA.segments().deleteSync(3)
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
""
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR'>jqXHR</a></div>
            </td>
        </tr>
    </table>
</section>
