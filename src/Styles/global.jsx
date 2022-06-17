import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
  	--body-font: 'Nunito Sans', sans-serif;
  	--body-color: #120f54;
  	--body-alt-color: #0d102f;
  	--bg-color: #120f54;
    --head-bs: #291B6B;
  	--head-color: #41cd7d;   
  	--matches-color: #1d613a;   
  	--head-alt-color: #fe8f9c;
  	--border-color: #8790ae;
  	--hover-color: #571ce0;
  	--hover-alt-color: #291b6b;
  	--bs-white: #fff;	
    --bs-light: #e2e1ff;
 	  --hover-color: #571ce0;
  	--darkreader-border--hover-color: #41199d;
  	--darkreader-bg--hover-color: #491bb0;
    --banner-back: #1f2340;
    --bs-blue: #382590;
   }

 

  html {
	  scroll-behavior: smooth;
  }

  button {
    cursor: pointer;
  }

   body{
    color: #fff;
    font-family: var(--body-font) !important; 
	  background-color: var(--body-color);
	  font-size: 18px;
	  line-height: 30px;
	  padding: 0;
	  margin: 0;
	  font-weight: 400;
	  overflow-x: hidden;
  }


  // Animation

  .animated {
	animation-duration: 1s;
	animation-fill-mode: both;
}
@keyframes fadeInDown {
	from {
		opacity: 0;
		-webkit-transform: translate3d(0, -100%, 0);
		-ms-transform: translate3d(0, -100%, 0);
		transform: translate3d(0, -100%, 0);
	}
	to {
		opacity: 1;
		-webkit-transform: none;
		-ms-transform: none;
		transform: none;
	}
}

.fadeInDown {
	-webkit-animation-name: fadeInDown;
	animation-name: fadeInDown;
}

@keyframes spin {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
@keyframes ripple2Ani {
	0% {
		transform: translate(0px, 0px);
	}
	33% {
		transform: translate(-5px, -5px);
	}
	66% {
		transform: translate(5px, 5px);
	}
	100% {
		transform: translate(0px, 0px);
	}
}
@keyframes stretch {
	0% {
		transform: scale(0.5);
	}
	50% {
		transform: scale(0.8);
	}
	100% {
		transform: scale(1);
	}
	-0% {
		transform: scale(1);
	}
	-50% {
		transform: scale(0.8);
	}
	-100% {
		transform: scale(0.5);
	}
}
@keyframes rippleAni {
	0% {
		transform: translate(0px, 0px);
	}
	33% {
		transform: translate(5px, -5px);
	}
	66% {
		transform: translate(-5px, 5px);
	}
	100% {
		transform: translate(0px, 0px);
	}
  }
`

export default GlobalStyle
