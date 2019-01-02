<?php
require_once "../../../site.php";
$view = new \CL\Course\View($site);
$view->set_title('QuineMcCluskeySolver Test');

$cirsimRoot = $course->get_root() . '/cirsim';
$view->add_rel_css($cirsimRoot . '/cirsim.css');
$view->add_jqueryui();
$view->add_rel_js($cirsimRoot . '/cirsim.con.js');
$view->add_rel_js($cirsimRoot . '/logic.con.js');
$view->add_qunit();
$view->add_rel_js('qunit-assert-close.js');
?>
<!doctype html>
<html lang="en-US">
<head>
	<link href="../../../cl/course.css" type="text/css" rel="stylesheet" />
	<?php echo $view->head(); ?>
</head>
<body>
<?php
echo $view->header();
?>
<div id="qunit"></div>
<div id="qunit-fixture"></div>

<script>
QUnit.test("Solver", function(assert) {

	var qm = new QuineMcCluskeySolver();
	qm.init(2);
	qm.set(0, true);
	qm.set(1, true);
	qm.compute();
	assert.equal(qm.expression(), "A'");

	qm.init(2);
	qm.set(0, true);
	qm.set(2, true);
	qm.compute();
	assert.equal(qm.expression(), "B'");

	qm.init(2);
	qm.compute();
	assert.equal(qm.expression(), "0");

	qm.init(2);
	qm.set(0, true);
	qm.set(1, true);
	qm.set(2, true);
	qm.set(3, true);
	qm.compute();
	assert.equal(qm.expression(), "1");

	qm.init(2);
	qm.set(0, true);
	qm.set(1, undefined);
	qm.compute();
	assert.equal(qm.expression(), "A'");

	qm.init(2);
	qm.set(0, true);
	qm.set(1, undefined);
	qm.set(2, undefined);
	qm.set(3, undefined);
	qm.compute();
	assert.equal(qm.expression(), "1");

	//console.log(qm.expression());

});
</script>

<?php
echo $view->footer();
?>

</body>
</html>

