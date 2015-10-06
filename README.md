[Automizy Js Api](http://developers.automizy.com/automizyjsapi) — JavaScript API library for Automizy Marketing Automation software
====================================================================================================================================


What is AutomizyJs API?
-----------------------

AutomizyJs API is a collection of JavaScript modules and functions which make the communication with the software [Automizy](http://automizy.com/) as easy as possible.


Automatic authentication
------------------------

You can gain access to the software only knowing a user name and password. The AutomizyJs API does all the hard work, you don't have to mess with token validation, although it gives the opportunity to do so if you really want.

```
//Logging in with username and password or cliendId and clientSecret
$AA.token().login({
    username: "john.doe@gmail.com",
    password: "password123"
}); //returns object with refresh and access token

```

Execute complex queries with simple conditions
-----------------------------------------

By using the basic functions of AutomizyJs API you can get any data of a given module in the winkling of an eye, you only have to give some simple conditions.

```
//Get all segments that have 'test' in their name
$AA.segments().where([
    [
        ['name', 'in', '%test%']
    ]
]).get();
```

Standardized return values
--------------------------

AutomizyJs API utilizes all features jQuery provides, every query returns a jqXHR object, this way you will be able to use the results in any context.

Dev sites
------------------
You can check the full documentation of AutomizyJs here: [http://developers.automizy.com/automizyjsapi/](http://developers.automizy.com/automizyjsapi/)

In case you are interested in our other projects too, check [http://developers.automizy.com/](http://developers.automizy.com/) 

Questions?
----------
If you have any questions, please feel free to contact us at [help@automizy.com](mailto:help@automizy.com).