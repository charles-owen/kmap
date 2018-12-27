<?php
require_once "../../../lib/course.inc.php";
$view = new View($course, $user);
$view->set_title('Minterms Test');

$cirsimRoot = $course->get_root() . '/cirsim';
$view->add_rel_css($cirsimRoot . '/cirsim.css');
$view->add_rel_js($cirsimRoot . '/logic.con.js');
$view->add_qunit();
$view->add_rel_js('qunit-assert-close.js');
?>
<!doctype html>
<html lang=en-US>
<head>
	<link href="../../../lib/course.css" type="text/css" rel="stylesheet" />
	<?php echo $view->head(); ?>
</head>
<body>
<?php
echo $view->header();
?>
<div id="qunit"></div>
<div id="qunit-fixture"></div>

<script>

QUnit.test("Logic.Minterms loading", function(assert) {
	var minterms = new Logic.Minterms();
	assert.equal(minterms.list(), '');

	minterms.add(7);
	assert.equal(minterms.list(), 'm7');

	minterms.add(3);
	assert.equal(minterms.list(), 'm3, m7');

	minterms.add(11);
	assert.equal(minterms.list(), 'm3, m7, m11');
	assert.ok(true);
});

QUnit.test("Logic.Minterms set", function(assert) {
	var minterms = new Logic.Minterms();
	assert.equal(minterms.list(), '');

	minterms.set(3, 7, 1, 9);
	assert.equal(minterms.list(), 'm1, m3, m7, m9');
});

</script>

<?php
echo $view->tail();
?>

</body>
</html>

