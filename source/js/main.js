(function() {
    var openFormButton = document.querySelector('.arrow-down');
    console.log(openFormButton);
    var closeFormButton = document.querySelector('.form__close-button');
    console.log(closeFormButton);
    // var form = document.querySelector('.form');
    // var nav = document.querySelector('.nav');


    if (openFormButton)
    {
        openFormButton.addEventListener('click', function() {
            form.open();
            e.preventDefault();
        });
    }

    // if (closeFormButton)
    // {
    //     closeFormButton.addEventListener('click', function() {
    //         form.close();
    //     });
    // }

    

}());