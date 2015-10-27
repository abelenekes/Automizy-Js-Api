<section>
    <h2>Split Tests</h2>  
    <div class='module-description'>
        These are special functions which can be used on split tests<br>
        In addition, all <a class='basicFunctionsLink' href="#BasicFunctions">Basic Functions</a> can be invoked on split tests.<br>
        To use these functions you have to invoke the <b>$AA.splitTests()</b> method first.<br>
        To see detailed structure and functionality of split tests, check the <a href="<?= $config['urls']['restApiDoc'] ?>#SplitTests" target='_blank'>Automizy REST API Docs</a>
    </div>
    <table class='functions-table'>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>send</h3>  
                    <div class='function-description'>
                        Use this function to create and send a new split test.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>obj</code>: The object, specifying the split test you want to send.<br>
                        This object has several parameters, all of them has to be defined to send the test correctly.
                        <ul>
                            <li>
                                <code>name</code>: These name of the split test you want to send. If not set the system will generate a name from the the <code>'Split Test'</code> prefix and the local time.
                            </li>
                            <li>
                                <code>conditionCheckDelay</code>: When sending split tests you have to set the duration of the test. You can set that time by giving the conditions below. Until the time is over the test counts the statistics. When the given time elapsed, the test will be completed.
                                <ul>
                                    <li><code>days</code>: The number of days you want the statistics to run.</li>
                                    <li><code>hours</code>: The number of hours you want the statistics to run.</li>
                                    <li><code>minutes</code>: The number of minutes you want the statistics to run.</li>
                                </ul>
                            </li>
                            <li>
                                <code>sendTime</code>: The exact time you want to send the test.<br>
                                For example: <code>'2015-06-22 14:16:00'</code>
                            </li>
                            <li>
                                <code>percentage</code>: When sending a split test you have to set the number of recipients, this can be set by giving a percentage. (100% will be all contacts from the selected segments.)<br>The system will send the campaigns randomly to the given percentage of contacts.
                            </li>
                            <li>
                                <code>winAction</code>: The action you want to make when the test is sent, and the time is over.<br>
                                Possible values:<br>
                                <code>'DO_NOTHING'</code>: There will be no action.<br>
                                <code>'SEND_REMAINING'</code>: The winner campaign will be sent to the remaining contacts.
                            </li>
                            <li>
                                <code>winCondition</code>:The condition that determines how the winner campaign will be selected.<br>
                                Possible values:<br>
                                <code>'MOST_EMAIL_OPEN'</code>: The winner campaing will be the one which has the highest number of opens.<br>
                                <code>'MOST_LINK_CLICK'</code>: The winner campaign will be the one that has more click on its links.
                            </li>
                            <li>
                                <code>segments</code>: The array containing the id of segments you want to send the test to.
                            </li>
                            <li>
                                <code>newsletters</code>: The array containing the newsletters you want to send in the test. (Min: 2 - Max: 4)<br>
                                In each newsletters you send, you can modify the parameters below:
                                <ul>
                                    <li><code>embedImages</code>: Set it <code>true</code> if you want to send the embed pictures too. (<code>false</code> by default)</li>
                                    <li><code>sendFromEmail</code>: The email address that will be shown as 'from email'.</li>
                                    <li><code>replyToEmail</code>: When a contact receives your email and clicks reply, which email address should that reply be sent to.</li>
                                    <li><code>sendFromName</code>: The name of a person or a company that will be shown as 'from name'.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
$AA.splitTests().send({
    name: 'My first split test',
    conditionCheckDelay: {
    //The test will run for 1 days, 2 hours and 30 minutes
        days: 1,
        hours: 2,
        minutes: 30
    },
    sendTime: '2015-06-22 14:00:00',
    percentage: 10,
    winAction: 'SEND_REMAINING',
    winCondition: 'MOST_LINK_CLICK',
    segments: [1,4,10],
    newsletters: [
        {
            newsletter: 3, //id
            name: 'Third campaign',
            embedImages: true,
            sendFromEmail: 'myemail@mymail.com',
            replyToEmail: 'myemail@mymail.com',
            sendFromName: 'John Doe',
        },
        {
            newsletter: 4, //id
            name: 'Fourth campaign',
            embedImages: false,
            sendFromEmail: 'myemail@mymail.com',
            replyToEmail: 'myemail@mymail.com',
            sendFromName: 'John Doe',
        }
    ]
});
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
{
    _links: Object,
    campaigns: Array[2],
    conditionCheck: null,
    firstConditionCheck: {
        days: 1,
        hours: 2,
        minutes: 30,
    },
    id: "36",
    job: Object,
    name: "My first split test",
    percentage: 10,
    status: "WAIT_UNTIL_SCHEDULE_TIME",
    winAction: "SEND_REMAINING",
    winCondition: "MOST_LINK_CLICK",
    winner: null
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getOpenStatById</h3>  
                    <div class='function-description'>
                        Use this function to get the number of opens.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the split test you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the split test was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting total and unique open statistics of the first split test
$AA.splitTests().getOpenStatById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//In the response object the keys are the id of the sent campaigns
{
    1:{
        total: 2,
        type: "all",
        unique: 1
    },
    2:{
        total: 4,
        type: "all",
        unique: 3
    }
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getClickStatById</h3>  
                    <div class='function-description'>
                        Use this function to get the number of clicks on your links in your given split test.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the split test you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the split test was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting total and unique click statistics of the first split test
$AA.splitTests().getClickStatById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//In the response object the keys are the id of the sent campaigns
{
    1:{
        total: 2,
        type: "all",
        unique: 1
    },
    2:{
        total: 4,
        type: "all",
        unique: 3
    }
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getShareStatById</h3>  
                    <div class='function-description'>
                        Use this function to get the share statistics of the given split test.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the split test you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the split test was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting total and unique share statistics of the first split test
$AA.splitTests().getShareStatById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//In the response object the keys are the id of the sent campaigns
{
    1:{
        total: 2,
        type: "all",
        unique: 1
    },
    2:{
        total: 4,
        type: "all",
        unique: 3
    }
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getUnsubscribeStatById</h3>  
                    <div class='function-description'>
                        Use this function to get the number of contacts who clicked on the unsubscribe link in the given split test.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the split test you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the split test was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting total unsubscribe statistics of the first split test
$AA.splitTests().getUnsubscribeStatById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//In the response object the keys are the id of the sent campaigns
{
    1:{
        total: 2,
        type: "all"
    },
    2:{
        total: 4,
        type: "all"
    }
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getBounceStatById</h3>  
                    <div class='function-description'>
                        Use this function to get the bounce statistics of the given split test.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the split test you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the split test was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting soft and hard bounce statistics of the first split test
$AA.splitTests().getBounceStatById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//In the response object the keys are the id of the sent campaigns
{
    1:{
        soft: 2,
        hard: 0,
        type: "all"
    },
    2:{
        soft: 0,
        hard: 0,
        type: "all"
    }
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getOpenTimeLineById</h3>  
                    <div class='function-description'>
                        Use this function to get the array representing the open time line statistics of the given split test.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the split test you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the split test was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting open time line statistics of the first split test
$AA.splitTests().getOpenTimeLineById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//In the response object the keys are the id of the sent campaigns
{
    //Results are represented by arrays
    1:
    [
        //Campaign 1, first timeframe
        {
            date :{
                date: "15-05-06 02:08:44",
                timezone_type:3,
                timezone:"Europe\/Budapest"
            },
            value{
                all: {
                    total: 0,
                    unique: 0
                }
            }
        },
        //Campaign 1, following timeframes
        {
            date :{
                date: "15-05-06 03:10:15",
                timezone_type:3,
                timezone:"Europe\/Budapest"
            },
            value{
                all: {
                    total: 3,
                    unique: 2
                }
            }
        },
        {},
        .
        .
        .
    ],

    1:
    [
        //Campaign 2, first timeframe
        {
            date :{
                date: "15-05-06 02:08:44",
                timezone_type:3,
                timezone:"Europe\/Budapest"
            },
            value{
                all: {
                    total: 0,
                    unique: 0
                }
            }
        },
        //Campaign 2, following timeframes
        {
            date :{
                date: "15-05-06 03:10:15",
                timezone_type:3,
                timezone:"Europe\/Budapest"
            },
            value{
                all: {
                    total: 3,
                    unique: 1
                }
            }
        },
        {},
        .
        .
        .
    ]
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getClickTimeLineById</h3>  
                    <div class='function-description'>
                        Use this function to get the array representing the click time line statistics of the given split test.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the split test you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the split test was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting click time line statistics of the first split test
$AA.splitTests().getClickTimeLineById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//In the response object the keys are the id of the sent campaigns
{
    //Results are represented by arrays
    1:
    [
        //Campaign 1, first timeframe
        {
            date :{
                date: "15-05-06 02:08:44",
                timezone_type:3,
                timezone:"Europe\/Budapest"
            }
            value{
                all: {
                    total: 1,
                    unique: 1
                }
            }
        },
        //Campaign 1, following timeframes
        {
            date :{
                date: "15-05-06 03:10:15",
                timezone_type:3,
                timezone:"Europe\/Budapest"
            },
            value{
                all: {
                    total: 3,
                    unique: 2
                }
            }
        },
        {},
        .
        .
        .
    ],

    1:
    [
        //Campaign 2, first timeframe
        {
            date :{
                date: "15-05-06 02:08:44",
                timezone_type:3,
                timezone:"Europe\/Budapest"
            },
            value{
                all: {
                    total: 0,
                    unique: 0
                }
            }
        },
        //Campaign 2, following timeframes
        {
            date :{
                date: "15-05-06 03:10:15",
                timezone_type:3,
                timezone:"Europe\/Budapest"
            },
            value{
                all: {
                    total: 2,
                    unique: 2
                }
            }
        },
        {},
        .
        .
        .
    ]
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getOpenDevicePieById</h3>  
                    <div class='function-description'>
                        Use this function to get the array representing the pie chart of opens, showing device statistics of the given split test.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the split test you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the split test was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting pie chart of open device statistics of the first split test
$AA.splitTests().getOpenDevicePieById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//In the response object the keys are the id of the sent campaigns
{
    1:{
        "PC\/Laptop": 10,
        Mobile: 3
    },
    2:{
        "PC\/Laptop": 3,
        "Mobile": 2
    }
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getClickDevicePieById</h3>  
                    <div class='function-description'>
                        Use this function to get the array representing the pie chart of clicks, showing device statistics of the given split test.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the split test you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the split test was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting pie chart of click device statistics of the first split test
$AA.splitTests().getClickDevicePieById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//In the response object the keys are the id of the sent campaigns
{
    1:{
        "PC\/Laptop": 10,
        "Mobile": 3
    },
    2:{
        "PC\/Laptop": 3,
        "Mobile": 2
    }
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getOpenOsPieById</h3>  
                    <div class='function-description'>
                        Use this function to get the array representing the pie chart of opens, showing operating system device statistics of the given split test.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the split test you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the split test was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting pie chart of opens, showing operating system device statistics of the first split test
$AA.splitTests().getOpenOsPieById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//In the response object the keys are the id of the sent campaigns
{
    1:{
        "Windows": 10,
        "Linux": 3
    },
    2:{
        "Windows": 2,
        "Linux": 3
    }
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getClickOsPieById</h3>  
                    <div class='function-description'>
                        Use this function to get the array representing the pie chart of clicks, showing operating system device statistics of the given split test.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the split test you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the split test was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting pie chart of clicks, showing operating system device statistics of the first split test
$AA.splitTests().getClickOsPieById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//In the response object the keys are the id of the sent campaigns
{
    1:{
        "Windows": 10,
        "Linux": 3
    },
    2:{
        "Windows": 2,
        "Linux": 3
    }
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getOpenBrowserPieById</h3>  
                    <div class='function-description'>
                        Use this function to get the array representing the pie chart of opens, showing browser statistics of the given split test.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the split test you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the split test was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting pie chart of opens, showing browser statistics of the first split test
$AA.splitTests().getOpenBrowserPieById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//In the response object the keys are the id of the sent campaigns
{
    1:{
        "Firefox": 2,
        "Chrome": 5,
        "Chrome Mobile": 3
    },
    2:{
        "Firefox": 0,
        "Chrome": 3,
        "Chrome Mobile": 2
    }
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getClickBrowserPieById</h3>  
                    <div class='function-description'>
                        Use this function to get the array representing the pie chart of clicks, showing browser statistics of the given split test.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the split test you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the split test was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting pie chart of clicks, showing browser statistics of the first split test
$AA.splitTests().getClickBrowserPieById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//In the response object the keys are the id of the sent campaigns
{
    1:{
        "Firefox": 2,
        "Chrome": 5,
        "Chrome Mobile": 3
    },
    2:{
        "Firefox": 0,
        "Chrome": 3,
        "Chrome Mobile": 2
    }
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getOpenDomainPieById</h3>  
                    <div class='function-description'>
                        Use this function to get the array representing the pie chart of opens, showing domain statistics of the given split test.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the split test you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the split test was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting pie chart of opens, showing domain statistics of the first split test
$AA.splitTests().getOpenDomainPieById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//In the response object the keys are the id of the sent campaigns
{
    1:{
        "gmail.com": 3,
        "hotmail.com": 2
    },
    2:{
        "gmail.com": 5,
        "hotmail.com": 3
    }
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getClickDomainPieById</h3>  
                    <div class='function-description'>
                        Use this function to get the array representing the pie chart of clicks, showing domain statistics of the given split test.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the split test you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the split test was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting pie chart of clicks, showing domain statistics of the first split test
$AA.splitTests().getClickDomainPieById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//In the response object the keys are the id of the sent campaigns
{
    1:{
        "gmail.com": 3,
        "hotmail.com": 2
    },
    2:{
        "gmail.com": 5,
        "hotmail.com": 3
    }
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
    </table>
</section>
