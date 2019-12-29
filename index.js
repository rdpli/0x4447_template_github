//
//
//
exports.handler = (event, context) => {

    return new Promise(function(resolve, reject) {

        //
        //  1.  Create a container to pass around the promises.
        //
        let container = {
            //
            //  Split the incoming data to show what we are working with.
            //
            req: {},
            //
            //  The redirect response for API Gateway.
            //
            res: {
                statusCode: 200,
                body: {}
            }
        };

        //
        //  ->  Start the chain.
        //
        one(container)
            .then(function(container) {

                return two(container);

            }).then(function(container) {

                //
                //  ->  Send back the good news.
                //
                return resolve(container.res);

            }).catch(function(error) {

                //
                //    1.    Set the internal server error status.
                //
                container.res.statusCode = 500;

                //
                //    2.    Surface the error message.
                //
                container.res.body = JSON.stringify({
                    message: error.message
                });

                //
                //  ->  Stop and surface the error.
                //
                return resolve(container.res);

            });

    });

};

//   _____    _____     ____    __  __   _____    _____   ______    _____
//  |  __ \  |  __ \   / __ \  |  \/  | |_   _|  / ____| |  ____|  / ____|
//  | |__) | | |__) | | |  | | | \  / |   | |   | (___   | |__    | (___
//  |  ___/  |  _  /  | |  | | | |\/| |   | |    \___ \  |  __|    \___ \
//  | |      | | \ \  | |__| | | |  | |  _| |_   ____) | | |____   ____) |
//  |_|      |_|  \_\  \____/  |_|  |_| |_____| |_____/  |______| |_____/
//

//
//
//
function one(container)
{
    return new Promise(function(resolve, reject) {

        console.info("one");

        //
        //    ->  Move to the next chain.
        //
        return resolve(container);

    });
}

//
//    Do something fun.
//
function two(container)
{
    return new Promise(function(resolve, reject) {

        console.info("two");

        //
        //    ->  Move to the next chain.
        //
        return resolve(container);

    });
}
