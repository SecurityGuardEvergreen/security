@extends('layouts.movil')

@section('content')
<div id="main-wrapper">
	<section role="main">
		<form method="post" name="front" id="front">
			<div class="dialPad compact">
				<div name="numero" id="numero" class="number"></div>
						
				<div class="dials">
					<ol>
						<li class="digits">
							<p><strong>1</strong></p>
						</li>
						<li class="digits">
							<p><strong>2</strong><sup>abc</sup></p>
						</li>
						<li class="digits">
							<p><strong>3</strong><sup>def</sup></p>
						</li>
						<li class="digits">
							<p><strong>4</strong><sup>ghi</sup></p>
						</li>
						<li class="digits">
							<p><strong>5</strong><sup>jkl</sup></p>
						</li>
						<li class="digits">
							<p><strong>6</strong><sup>mno</sup></p>
						</li>
						<li class="digits">
							<p><strong>7</strong><sup>pqrs</sup></p>
						</li>
						<li class="digits">
							<p><strong>8</strong><sup>tuv</sup></p>
						</li>
						<li class="digits">
							<p><strong>9</strong><sup>wxyz</sup></p>
						</li>
						<li class="digits">
							<p><strong>*</strong></p>
						</li>
						<li class="digits">
							<p><strong>0</strong><sup>+</sup></p>
						</li>
						<li class="digits">
							<p><strong>#</strong></p>
						</li>
						<li id="comment">
							<center>
							<textarea cols="31" rows="3" name="comentario" id="comentario"></textarea> 
							</center>
						</li>
						<li>
							<span id="deleted"><i class="fa fa-arrow-circle-o-left "></i></span>			
						</li>						
						<li id="panic">
							<span><i class="fa fa-volume-up "></i></span>
						</li>
						<li class="digits" id="send">
							<p><strong><i id="label_send" class="fa fa-arrow-right "></i></strong> </p>
						</li>
						<li>
							<span id="deleted_all"><i class="fa fa-plus-circle rotar45 "></i></span>			
						</li>
						<!-- <li class="digits">
							<p><strong><i class="icon-remove-sign icon-large"></i></strong> <sup>Delete</sup></p>
						</li>
						<li class="digits pad-action">
							<p><strong><i class="icon-phone icon-large"></i></strong> <sup>Submit</sup></p>
						</li> -->
					</ol>
				</div>
			</div>
		</form>
	</section>
</div>
@stop

