function chapter_show_base(chapter) {
	$('#Chapter01').hide();
	$('#Chapter02').hide();
	$('#Chapter03').hide();
	$('#Chapter04').hide();
	$('#Chapter05').hide();
	$('#Chapter06').hide();
	$('#Chapter07').hide();
	$('#Chapter08').hide();
	$('#Chapter09').hide();
	$('#Chapter10').hide();
	$('#Chapter11').hide();
	$('#Chapter12').hide();

	$('#Chapter' + chapter).show();
	var num = parseInt(chapter);
	num = num - 1;
	num = num + "";
	if (num.length < 2) {
		num = '0' + num;
	}

	return num;
}

function chapter_show(chapter) {
	window.location = '#Chapter' + chapter_show_base(chapter) + "_ref";
}

var editor = (function() {
	var content = {
		"Chapter01": [
            {
			    "title":	"Getting configuration options",
			    "source":   ['Chapter01/program_options_base/main.cpp', 'Chapter01/program_options_short/main.cpp'],
			    "compile":  "-lboost_program_options",
			    "run":	  "--apples=10 --oranges=5",
		    }, {
			    "title":	"Storing any value in a container/variable",
			    "source":   ['Chapter01/any/main.cpp'],
		    }, {
			    "title":	"Storing multiple chosen types in a variable/container",
			    "source":   ['Chapter01/variant/main.cpp'],
		    }, {
			    "title":	"Using a safer way to work with a container that stores multiple chosen types",
			    "source":   ['Chapter01/any_db_example/main.cpp', 'Chapter01/variant_db_example/main.cpp'],
		    }, {
			    "title":	"Returning a value or flag where there is no value",
			    "source":   [''],
		    }, {
			    "title":	"Returning an array from a function",
			    "source":   ['Chapter01/array/main.cpp'],
		    }, {
			    "chapter":  "Chapter01",
			    "title":	"Combining multiple values into one",
			    "source":   ['Chapter01/tuple/main.cpp'],
		    }, {
			    "title":	"Reordering the parameters of function",
			    "source":   ['Chapter01/bind_placeholders/main.cpp'],
		    }, {
			    "title":	"Binding a value as a function parameter",
			    "source":   ['Chapter01/bind_values/main.cpp'],
		    }, {
			    "title":	"Using the C++11 move emulation",
			    "source":   ['Chapter01/move/main.cpp'],
		    }, {
			    "title":	"Making a noncopyable class",
			    "source":   ['Chapter01/noncopyable/main.cpp'],
		    }, {
			    "title":	"Making a noncopyable but movable class",
			    "source":   ['Chapter01/noncopyable_movable/main.cpp'],
		    },
        ],

        "Chapter02": [
		    {
			    "title":	"Converting strings to numbers",
			    "source":   ['Chapter02/lexical_to_number/main.cpp'],
		    }, {
			    "title":	"Converting numbers to strings",
			    "source":   ['Chapter02/lexical_to_string/main.cpp'],
		    }, {
			    "title":	"Converting numbers to numbers",
			    "source":   ['Chapter02/numeric_cast/main.cpp'],
		    }, {
			    "title":	"Converting user-defined types to/from strings",
			    "source":   ['Chapter02/lexical_user_defined/main.cpp'],
		    }, {
			    "title":	"Casting polymorphic objects",
			    "source":   ['Chapter02/polymorphic_cast/main.cpp'],
		    }, {
			    "title":	"Parsing simple input",
			    "source":   ['Chapter02/spirit/main.cpp'],
		    }, {
			    "title":	"Parsing input",
			    "source":   ['Chapter02/spirit_rules/main.cpp'],
		    },
        ],


		"Chapter03": [
            {
			    "title":	"Managing pointers to classes that do not leave scope",
			    "source":   ['Chapter03/scoped_ptr/main.cpp'],
		    }, {
			    "title":	"Reference counting of pointers to classes used across methods",
			    "source":   ['Chapter03/shared_ptr/main.cpp'],
			    "compile":  "-lboost_thread -lboost_system",
		    }, {
			    "title":	"Managing pointers to arrays that do not leave scope",
			    "source":   ['Chapter03/scoped_array/main.cpp'],
		    }, {
			    "title":	"Reference counting pointers to arrays used across methods",
			    "source":   ['Chapter03/shared_array/main.cpp'],
			    "compile":  "-lboost_thread -lboost_system",
		    }, {
			    "title":	"Storing any functional objects in a variable",
			    "source":   ['Chapter03/function_fobject/main.cpp', 'Chapter03/function_fpointer/main.cpp'],
		    }, {
			    "title":	"Passing C++11 lambda functions in a variable",
			    "source":   ['Chapter03/function_lambda_c++11/main.cpp'],
			    "compile":  "-std=c++11",
		    }, {
			    "title":	"Containers of pointers",
			    "source":   ['Chapter03/ptr_container_c++11/main.cpp'],
			    "compile":  "-std=c++11",
		    }, {
			    "title":	"Doing something at scope exit",
			    "source":   ['Chapter03/scope_exit/main.cpp'],
		    }, {
			    "title":	"Initializing the base class by a member of the derived class",
			    "source":   ['Chapter03/base_from_member/main.cpp'],
		    },
        ],

		"Chapter04": [
		    {
			    "title":	"Checking sizes at compile time",
			    "source":   ['Chapter04/static_assert/main.cpp'],
		    }, {
			    "title":	"Enabling the usage of templated functions for integral types",
			    "source":   ['Chapter04/enable_if_c/main.cpp'],
		    }, {
			    "title":	"Disabling templated functions' usage for real types",
			    "source":   ['Chapter04/disable_if_c/main.cpp'],
		    }, {
			    "title":	"Creating a type from number",
			    "source":   ['Chapter04/mpl_int_/main.cpp'],
		    }, {
			    "title":	"Implementing a type trait",
			    "source":   ['Chapter04/is_stdvector/main.cpp'],
		    }, {
			    "title":	"Selecting an optimal operator for a template parameter",
			    "source":   ['Chapter04/conditional/main.cpp'],
		    }, {
			    "title":	"Getting a type of expression in C++03",
			    "source":   ['Chapter04/typeof/main.cpp'],
		    },
        ],



		"Chapter05": [
		    {
			    "title":	"Creating an execution thread",
			    "source":   ['Chapter05/thread/main.cpp'],
			    "compile":  "-lboost_thread -lboost_system",
		    }, {
			    "title":	"Syncing access to a common resource",
			    "source":   ['Chapter05/mutex/main.cpp'],
			    "compile":  "-lboost_thread -lboost_system",
		    }, {
			    "title":	"Fast access to common resource using atomics",
			    "source":   ['Chapter05/atomics/main.cpp'],
			    "compile":  "-lboost_thread -lboost_system",
		    }, {
			    "title":	"Creating a work_queue class",
			    "source":   ['Chapter05/work_queue/main.cpp'],
			    "compile":  "-lboost_thread -lboost_system",
		    }, {
			    "title":	"Multiple-readers-single-writer lock",
			    "source":   ['Chapter05/shared_lock/main.cpp'],
			    "compile":  "-lboost_thread -lboost_system",
		    }, {
			    "title":	"Creating variables that are unique per thread",
			    "source":   ['Chapter05/thread_specific_ptr/main.cpp'],
			    "compile":  "-lboost_thread -lboost_system",
		    }, {
			    "title":	"Interrupting a thread",
			    "source":   ['Chapter05/interruptions/main.cpp'],
			    "compile":  "-lboost_thread -lboost_system",
		    }, {
			    "title":	"Manipulating a group of threads",
			    "source":   ['Chapter05/thread_group/main.cpp'],
			    "compile":  "-lboost_thread -lboost_system",
		    },
        ],


		"Chapter06": [
		    {
			    "title":	"Registering a task for processing an arbitrary datatype",
			    "source":   ['Chapter06/tasks_processor_base/main.cpp', 'Chapter06/tasks_processor_base/tasks_processor_base.hpp'],
			    "compile":  "-lboost_thread -lboost_system",
		    }, 
        ],


		"Chapter07": [
		    {
			    "title":	"Changing cases and case-insensitive comparison",
			    "source":   ['Chapter07/case_conv/main.cpp'],
		    }, {
			    "title":	"Matching strings using regular expressions",
			    "source":   ['Chapter07/regex_match/main.cpp'],
			    "compile":  "-lboost_regex",
		    }, {
			    "title":	"Searching and replacing strings using regular expressions",
			    "source":   ['Chapter07/regex_replace/main.cpp'],
			    "compile":  "-lboost_regex",
		    }, {
			    "title":	"Formatting strings using safe printf-like functions",
			    "source":   ['Chapter07/format/main.cpp'],
		    }, {
			    "title":	"Replacing and erasing strings",
			    "source":   ['Chapter07/string_algo/main.cpp'],
		    }, {
			    "title":	"Representing a string with two iterators",
			    "source":   ['Chapter07/iterator_range/main.cpp'],
		    }, {
			    "title":	"Using a reference to string type",
			    "source":   ['Chapter07/string_ref/main.cpp'],
		    },
        ],


		"Chapter08": [
		    {
			    "title":	'Using type "vector of types"',
			    "source":   ['Chapter08/vector_of_types/main.cpp'],
		    }, {
			    "title":	'Manipulating a vector of types',
			    "source":   ['Chapter08/manipulating_vector_of_types/main.cpp'],
		    }, {
			    "title":	"Getting a function's result type at compile time",
			    "source":   ['Chapter08/result_of_c++11/main.cpp'],
			    "compile":  "-std=c++11",
		    }, {
			    "title":	"Making a higher-order metafunction",
			    "source":   ['Chapter08/higher_order_metafunctions/main.cpp'],
		    }, {
			    "title":	"Evaluating metafunctions lazily",
			    "source":   ['Chapter08/lazy/main.cpp'],
		    }, {
			    "title":	"Converting all the tuple elements to strings",
			    "source":   ['Chapter08/tuple_to_string/main.cpp'],
		    }, {
			    "title":	"Splitting tuples",
			    "source":   ['Chapter08/splitting_tuple/main.cpp'],
		    },
        ],



		"Chapter09": [
		    {
			    "title":	'Comparing strings in an ultra-fast manner',
			    "source":   ['Chapter09/hash/main.cpp'],
		    }, {
			    "title":	'Using an unordered set and map',
			    "source":   ['Chapter09/unordered/main.cpp'],
		    }, {
			    "title":	'Making a map, where value is also a key',
			    "source":   ['Chapter09/bimap/main.cpp'],
		    }, {
			    "title":	'Using multi-index containers',
			    "source":   ['Chapter09/multiindex/main.cpp'],
		    }, {
			    "title":	'Getting the benefits of single-linked list and memory pool',
			    "source":   ['Chapter09/slist_and_pool/main.cpp'],
			    "compile":  "-lboost_system",
		    }, {
			    "title":	'Using flat associative containers',
			    "source":   ['Chapter09/flat/main.cpp'],
		    },
        ],



		"Chapter10": [
		    {
			    "title":	'Detecting int128 support',
			    "source":   ['Chapter10/int128/main.cpp'],
		    }, {
			    "title":	'Detecting RTTI support',
			    "source":   ['Chapter10/no_rtti/main.cpp'],
		    }, {
			    "title":	'Speeding up compilation using C++11 extern templates',
			    "source":   ['Chapter10/extern_template/main.cpp'],
			    "compile":  "-std=c++11",
		    }, {
			    "title":	'Writing metafunctions using simpler methods',
			    "source":   ['Chapter10/constexpr_c++11/main.cpp'],
			    "compile":  "-std=c++11",
		    }, {
			    "title":	'Reducing code size and increasing performance of user-defined types (UDTs) in C++11',
			    "source":   ['Chapter10/noexcept_c++11/main.cpp'],
			    "compile":  "-std=c++11",
		    }, {
			    "title":	'The portable way to export and import functions and classes',
			    "source":   ['Chapter10/export_import/main.cpp', 'Chapter10/my_library/my_library.cpp', 'Chapter10/my_library/my_library.hpp'],
		    }, {
			    "title":	'Detecting the Boost version and getting latest features',
			    "source":   ['Chapter10/version/main.cpp'],
		    },
        ],



		"Chapter11": [
		    {
			    "title":	'Listing files in a directory',
			    "source":   ['Chapter11/listing_files/main.cpp'],
			    "compile":  "-lboost_system -lboost_filesystem",
		    }, {
			    "title":	'Erasing and creating files and directories',
			    "source":   ['Chapter11/erasing_files/main.cpp'],
			    "compile":  "-lboost_system -lboost_filesystem",
		    }, {
			    "title":	'Passing data quickly from one process to another',
			    "source":   ['Chapter11/interprocess_basics/main.cpp'],
			    "compile":  "-lrt",
		    }, {
			    "title":	'Syncing interprocess communications',
			    "source":   ['Chapter11/interprocess_queue/main.cpp'],
			    "compile":  "-lrt",
		    }, {
			    "title":	'Using pointers in shared memory',
			    "source":   ['Chapter11/interprocess_pointers/main.cpp'],
			    "compile":  "-lrt",
		    }, {
			    "title":	'The fastest way to read files',
			    "source":   ['Chapter11/reading_files/main.cpp'],
		    }, {
			    "title":	'Coroutines – saving the state and postponing the execution',
			    "source":   ['Chapter11/coroutines/main.cpp'],
			    "compile":  "-lboost_coroutine -lboost_thread -lboost_system",
		    },
        ],


		"Chapter12": [
		    {
			    "title":	'Working with graphs',
			    "source":   ['Chapter12/graph/main.cpp'],
		    }, {
			    "title":	'Visualizing graphs',
			    "source":   ['Chapter12/graph_vis/main.cpp'],
		    }, {
			    "title":	'Using a true random number generator',
			    "source":   ['Chapter12/random/main.cpp'],
			    "compile":  "-lboost_random -lboost_system",
		    }, {
			    "title":	'Using portable math functions',
			    "source":   ['Chapter12/math/main.cpp'],
		    }, {
			    "title":	'Writing test cases',
			    "source":   ['Chapter12/testing/main.cpp'],
			    "compile":  "-static -lboost_unit_test_framework -lboost_system",
		    }, {
			    "title":	'Combining multiple test cases in one test module',
			    "source":   ['Chapter12/testing_advanced/main.cpp', 'Chapter12/testing_advanced/developer1.cpp', 'Chapter12/testing_advanced/developer2.cpp', 'Chapter12/testing_advanced/foo.cpp', 'Chapter12/testing_advanced/foo.hpp'],
			    "compile":  "-static -lboost_unit_test_framework -lboost_system",
		    }, {
			    "title":	'Manipulating images',
			    "source":   ['Chapter12/gil/main.cpp', 'Chapter12/testing_advanced/developer1.cpp'],
			    "compile":  "-lpng",
		    },
        ],

	};

	var index = 0;
	var code;
	var command_line;
	var output;
	var recipe_title;
	var compile;

	function download_impl_base(chapter, ind, source_num) {
        index = ind;
        c = content[chapter][index];
        source_num = (typeof source_num !== 'undefined' ? source_num : 0);
        source_num = (source_num < c["source"].length ? source_num : 0);

		$.get("https://raw.githubusercontent.com/apolukhin/Boost-Cookbook-4880OS/master/" + c["source"][source_num], function(data) {
			code.setValue(data);
			code.clearSelection();
			command_line.val(c['run']);
			output.text('');
			recipe_title.text(
                "Recipe: "
                + c["title"]
                + (c["source"].length > 1 ? " (part " + (source_num + 1) + ")": "")
            );

			if (!c['compile']) {
				c['compile'] = "";
			}
			compile.val("g++ -Wall main.cpp " + c['compile'] + " -o main_prog");
		})
	};

	function download_impl(chapter, ind, num) {
		download_impl_base(chapter, ind, num);
		window.location="#online_example";
	};

	function process_remote_impl(cmd) {
		output.text('');
		var to_compile = {
			"src": code.getValue(),
			"cmd": cmd,
		};

		output.text("Executing... Please wait.");

		$.ajax({
		  url: "http://coliru.stacked-crooked.com/compile",
		  type: "POST",
		  data: JSON.stringify(to_compile),
		  contentType:"text/plain; charset=utf-8",
		  dataType: "text"
		}).done(function(data) {
			output.text(data);
		}).fail(function(data) {
			output.text("Server error: " + data);
		});
	};

	function compile_impl() {
		process_remote_impl(
			compile.val() + " && echo 'Compilation: SUCCESS' "
		);
	};

	function run_impl() {
		if (!command_line.val()) {
			command_line.val("");
		}
		process_remote_impl(
			compile.val()
			+ " && echo 'Compilation: SUCCESS\n\nProgram output:\n'  && ./main_prog " + command_line.val() + " && echo '\n\nRun: SUCCESS'"
		);
	};

	function init_impl(code_block, command_line_block, output_block, recipe_title_block, compile_block) {
		code = code_block;
		command_line = command_line_block;
		output = output_block;
		recipe_title = recipe_title_block;
		compile = compile_block;

		code.setTheme("ace/theme/textmate");
		code.getSession().setMode("ace/mode/c_cpp");
		code.setShowPrintMargin(false);
		code.setOptions({
			maxLines: Infinity,
			fontSize: "12pt",
		});
        code.$blockScrolling = Infinity;

		download_impl_base("Chapter01", 0, 0);
		chapter_show_base('01');

/* Content generator
        var d = "";
        $.each(["Chapter08", "Chapter09", "Chapter10", "Chapter11", "Chapter12"], function(ignore, chapter) {
            var i = 0;
            $.each(content[chapter], function(key, value){
                d = d + "<li><a href=\"javascript:editor.download('" + chapter + "', " + i + ")\">" + value["title"];
                if (value["source"].length > 1) {
                    d = d + " (part 1</a>";
                    $.each(value["source"].slice(1), function(index) {
                        d = d + ", <a href=\"javascript:editor.download('" + chapter + "', " + i + ", " + (index + 1) + ")\">part " + (index + 2) + "</a>";
                    });
                    d = d + ")";
                }
                d = d + "</li>\n";
                ++ i;
            });
        });
        alert(d);*/
	};

	return {
		download: download_impl,
		compile: compile_impl,
		run: run_impl,
		init: init_impl,
	};

})();
