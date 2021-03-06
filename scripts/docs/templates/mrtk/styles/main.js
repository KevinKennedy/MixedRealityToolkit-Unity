// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE file in the project root for full license information.

function createSharedTags()
{
	// get web root path
	var scripts = document.getElementsByTagName("script");
	var scriptPath = scripts[scripts.length-1].src;
	var versionIndex = scriptPath.lastIndexOf('version/');
	var rootDir = scriptPath;
	if (versionIndex > 0)
	{
		rootDir = scriptPath.substring(0, versionIndex);
	}
	else
	{
		rootDir = scriptPath.substring(0, scriptPath.lastIndexOf('styles/'));
	}
	
	// include dropdown script
	var imported = document.createElement('script');
	imported.src = rootDir+'web/version.js';
	imported.id = 'dropdownScript';
	document.head.appendChild(imported);
	
	// include dropdown css
	var head  = document.getElementsByTagName('head')[0];
	var link  = document.createElement('link');
	link.rel  = 'stylesheet';
	link.type = 'text/css';
	link.href = rootDir+'web/version.css';
	link.media = 'all';
	head.appendChild(link);

	var analytics = `<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-177859076-1"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	
	  gtag('config', 'UA-177859076-1');
	</script>
	`
	head.insertAdjacentHTML('afterbegin', analytics);
}

createSharedTags();