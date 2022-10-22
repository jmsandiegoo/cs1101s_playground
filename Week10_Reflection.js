// Reflection Question 2

function zip_stream(s1, s2) {
    return pair(head(s1), () => zip_stream(s2, stream_tail(s1)));
}

function zip_list_of_streams(ss) {
    return pair(head(head(ss)), 
                () => zip_list_of_streams(append(tail(ss), 
                                          list(head(ss)))));
}

function add_streams(s1, s2) {
    if (is_null(s1)) {
        return s2;
    } else if (is_null(s2)) {
        return s1;
    } else {
        return pair(head(s1) + head(s2),() => add_streams(stream_tail(s1), stream_tail(s2)));
    }
}

function partial_sums(integers) {
    return pair(head(integers), () => add_streams(stream_tail(integers), 
                                      partial_sums(integers)));
}



/*
s1  s2
1   2
11  22
111 222
*/