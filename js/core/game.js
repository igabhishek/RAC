var i = 0;
            
function test()
{
    requestAnimationFrame(test);

    console.log("being called " + i);
    i++;
}

test();