@media only screen and (max-width: 768px) {
	.main-grid-container{
		/* display: block; */
		border: 1px solid red;
		width: 100vw;
		position: absolute;
		margin: 0 -1.6rem;
		flex-direction: column;
	}
	#remote_users_video .others-user{
		position: absolute;
		top: 0;
		right: 2.9rem;
		background-color: #000000;
		height: 15vh;
	}
	#rop_reset{
		font-size: 2rem;
	}
	.top_heading{
		/* display: none; */
	}
	#robot-video-screen .remote-user{
		width: 95vw;
		height: 90vh;
		position: static;
		margin: 0 auto;
	}
	#robot-video{
		/* width: 100vw; */
		background-color: rebeccapurple;
		height: 100%;
	}
	.local-video{
		position: absolute;
		z-index: 100;
		max-width: 10rem;
		left: 1.8rem;
	}
	#local-video{
		max-width: 10rem;
	}
	.controller{
		/* width: 46%; */
		/* position: absolute; */
		/* bottom: -6rem; */
		/* right: 1rem; */
		display: flex;
		position: absolute;
		bottom: 0;
	
	}
	.controller button {
		font-size: 12px;
	}
	.hand-group{
		display: flex;
		flex-direction: column;
		width: 35%;
		/* margin-left: 8.5rem; */
		/* position: absolute; */
		right: 0;
		top: 6rem;
	}
	.controller-group{
		position: static;
		/* right: 0;
		bottom: 0; */
	}
	.local-video .video-btn{
		left: -57px;
	}
	.video-btn .fa-solid{
		font-size: 12px;
	}

	.servo{
		bottom: 10rem;
		left: 3rem;

	}
	.camera_left{
		/* position: absolute;
		top: -10rem; */
	}
	.camera_right{
		/* position: absolute;
		top: -10rem;
		left: 0; */
	}
	.controller-group button{
		min-width: auto;
	}
	
	.wheel{
		position: absolute;
		bottom: 0rem;
		left: 1rem;
	}
	.hand-controller{
		/* position: absolute; */
	}

  }