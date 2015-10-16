<section>
    <h2>Templates</h2>  
    <div class='module-description'>
        All <a class='basicFunctionsLink' href="#BasicFunctions">Basic Functions</a> can be invoked on templates.<br>
        To use the functions you have to invoke the <b>$AA.templates()</b> method first.<br>
        To see detailed structure and functionality of templates, check the <a href="<?= $config['urls']['restApiDoc'] ?>#Templates" target='_blank'>Automizy REST API Docs</a>
    </div>

    <table class='functions-table'>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>copy</h3>
                    <div class='function-description'>
                        Use this function to copy an email.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the template you want to copy.<br>
                        <!-- Mielőtt az alábbi két sort olvasod nézd meg az example-t, lehet azzal egyértelműbb a dolog... -->
                        <code>object</code>: In this object, you can specify any changes you want to do on the copy. For example if you want to change the name just type <code>{name : 'New Name'}</code>.<br>
                            However, there is a built-in object called copyData, which can help you adding prefixes/suffixes to your copied template.
                        <!-- Ebben az objektumban kell felsorolni azokat az adatokat amiket a másoláskor módosítani akarsz. Ha nem adod meg ezt a paramétert, akkor másoláskor minden adat a másolt elem adataival fog megegyezni. Ha megadod pl azt, hogy "object.name = 'alma'", akkor a másolt elemnek "alma" lesz a neve, de a többi adat változatlan marad. Van egy speciális eleme az objektumnak: object.copyData. Ennek egyelőre két eleme lehet: object.copyData.prefix és object.copyData.suffix: ezzel tudsz a másolt elem neve elé/után szúrni egy szöveget. Pl: object.copyData.prefix = "Copy - " a másolt newsletter neve elé szúrja, hogy "Copy - ". --><br>
                        <code>done</code>: You can set a function you want to invoke after the copying is over.
                        <!-- Ez egy függvény, ami akkor fut le amikor a másolás teljesen végzett. Erre azért van szükség, mert bár a copy visszatér egy jqXHR -el, de az csak a lekérdezésnek az objektuma. A másolás pedig két lépésből áll: lekérdezés és beszúrás, de mivel a beszúrás a lekérdezés done -jában van, ezért azzal nem tudok visszatérni a copy-nál. Szóval 3. paraméternek kell emgadni a függvényt, ami akkor fut le amikor kész a beszúrás is. --><br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <pre class='prettyprint linenums'>
//Copying the template with id 1
$AA.templates().copy(1, {copyData:{prefix:'Copy - '}}, function(data){
    console.log(data); //The data of the copy
}).done(function(data){
    console.log(data); //The data of the original object
});
                </pre>
                <div class='function-returns'> Returns: The original object (<a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a>)</div>
            </td>
        </tr>
    </table>

</section>
