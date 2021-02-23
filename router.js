const router = require( 'express' ).Router();
const carRouter = require( './routers/carRouter' );
const useRouter = require( './routers/userRouter' )


router.use( '/cars',carRouter );
router.use( '/user', useRouter );


module.exports = router;