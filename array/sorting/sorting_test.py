import sorting_template
import pytest

nums = [5,7,3,4,8,9,2,6,1]
s_nums = sorted(nums)

@pytest.mark.parametrize("test_input,expected",
    [("sorting_template.bubble_sort(nums)", s_nums),
     ("sorting_template.selection_sort(nums)", s_nums),
     ("sorting_template.insertion_sort(nums)", s_nums),
     ("sorting_template.quick_sort(nums)", s_nums),
     ("sorting_template.merge_sort(nums)", s_nums)])

def test_eval(test_input, expected):
    assert eval(test_input) == expected