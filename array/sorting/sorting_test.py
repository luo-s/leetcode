import sorting_template
import pytest

nums = [abs(num) for num in sorting_template.nums]
s_nums = sorted(nums)

@pytest.mark.parametrize("test_input,expected",
    [("sorting_template.bubble_sort(nums)", s_nums),
     ("sorting_template.selection_sort(nums)", s_nums),
     ("sorting_template.insertion_sort(nums)", s_nums),
     ("sorting_template.quick_sort(nums)", s_nums),
     ("sorting_template.merge_sort(nums)", s_nums),
     ("sorting_template.shell_sort(nums)", s_nums),
     ("sorting_template.counting_sort(nums)", s_nums),
     ("sorting_template.bucket_sort(nums)", s_nums),
     ("sorting_template.radix_sort(nums)", s_nums)])

def test_eval(test_input, expected):
    assert eval(test_input) == expected