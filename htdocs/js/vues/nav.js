define(function(){

var nav = new Vue({
el:"#nav",
template:`
<nav id="header" class="navbar navbar-lilybin navbar-unresponsive navbar-static-top">
	<div class="container-fluid">
		<div class="navbar-header hidden-xs">
			<span class="navbar-brand navbar-brand-img">
				<img width="30" height="30" src="/images/ly.svg">
			</span>
			<span class="navbar-brand">
				<a href="/">LilyBin</a>
				<a href="https://github.com/LilyBin/LilyBin" title="View Sources" data-toggle="tooltip"><i class="fa fa-github"></i></a>
			</span>
		</div>
		<ul class="nav navbar-nav">
			<li class="visible-xs"><a href="/">LilyBin</a></li>
			<li><a href="#" class="noop" id="preview_button" title="<kbd><kbd>Ctrl</kbd>+<kbd>Enter</kbd></kbd>" data-toggle="tooltip">Preview</a></li>
			<li class="dropdown">
				<a href="#" id="version_btn" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">LilyPond <span class="caret"></span></a>
				<ul class="dropdown-menu" id="version_sel" role="menu">
					<li><a href="#" class="noop" data-version="stable">
						Latest Stable
					</a></li>
					<li><a href="#" class="noop" data-version="unstable">
						Latest Unstable
					</a></li>
				</ul>
			</li>
			<li><a href="#" id="reset_button">Reset</a></li>
			<li class="dropdown">
				<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Save to <span class="caret"></span></a>
				<ul class="dropdown-menu" role="menu">
					<li><a href="#" class="noop" id="save_button" title="<kbd><kbd>Ctrl</kbd>+<kbd>S</kbd></kbd>" data-toggle="tooltip">LilyBin</a></li>
					<li><a href="#" class="noop" id="save_to_dropbox">Dropbox</a></li>
				</ul>
			</li>
			<li><a href="#" class="noop" id="undo_button" title="<kbd><kbd>Ctrl</kbd>+<kbd>Z</kbd></kbd>" data-toggle="tooltip">Undo</a></li>
			<li><a href="#" class="noop" id="redo_button" title="<kbd><kbd>Ctrl</kbd>+<kbd>Y</kbd></kbd>" data-toggle="tooltip">Redo</a></li>
			<li class="dropdown">
				<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Open <span class="caret"></span></a>
				<ul class="dropdown-menu" role="menu">
					<li><a href="#" class="noop" id="open_from_dropbox">Dropbox</a></li>
				</ul>
			</li>
		</ul>
	</div>
</nav>
`
})

return nav;
})
