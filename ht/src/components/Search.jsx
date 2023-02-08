import Card from "./Card";
function Search({ selVal, info, query, dateQuery, set, options }) {
  const markAsDone = (i) => {
    set(
      info.map((res) => {
        //console.log(res);
        if (res.id === i) {
          res.status = !res.status;
        }
        return res;
      })
    );
  };

  const dd = (tt) => {
    tt.forEach((r) => {
      //console.log(r);
    });
    //console.log(ff);
  };

  const del = (i) => {
    set(info.filter((t) => t.id !== i.id));
  };

  const filterPosts = (_info, query_, date, opts, sV) => {
    // if (!query_ && !date && opts.length >= 1) {
    //   //console.log("okok")
    //   return _info;
    // } else if (!query_ && date) {
    //   return _info.filter((post) => {
    //     return post.date == date;
    //   });
    // } else if (query_ && !date) {
    //   return _info.filter((post) => {
    //     return post.text.toLowerCase().includes(query_);
    //   });
    // }
    // // else if()

    // return _info.filter(
    //   (post) => {
    //     return post.text.toLowerCase().includes(query_) && post.date == date
    //   }
    // );

    return _info.filter((post) => {
      // if(!query && !date && (sV == 'All' || sV == '') ) return _info
      console.log((!query && date && sV));
      if (!query && date && sV) {
        if (sV == "All" || sV == "") {
          return _info;
        } else {
          return post.date == date && sV == post.category;
        }
      } else if (!query && date && !sV) return post.date == date;
      else if (!query && !date && sV) {
        if (sV == "All" || sV == "") {
          return _info;
        } else {
          return sV == post.category;
        }
      } else if (query && !date && !sV)
        return post.text.toLowerCase().includes(query_);
      else if (query && !date && sV) {
        if (sV == "All" || sV == "") {
          return _info;
        } else
          return (
            post.text.toLowerCase().includes(query_) || sV == post.category
          );
      } else if (query && date && !sV)
        return post.text.toLowerCase().includes(query_) || post.date == date;
      else if (query && date && sV) {
        if (sV == "All" || sV == "") {
          return _info;
        } else
          return (
            post.date == date &&
            sV == post.category &&
            post.text.toLowerCase().includes(query_)
          );
      }
    });
  };
  const ff = filterPosts(info, query, dateQuery, options, selVal);

  //console.log(ff);
  //console.log(info, query);
  return (
    <>
      {/* <button onClick={() => dd(info)}>sbhjsbbhvbshbwbbwbwbjkbhjk</button> */}
      {/* <button onClick={() => yy(info,dateQuery)}>nnnnn</button> */}
      <div className="todos">
        <ol>
          {ff.map((r, i) => {
           // console.log(r);
            //console.log(r);
            return (
              <>
                <Card cardInfo={r.text} />
                <input
                  type="checkbox"
                  onChange={() => {
                    markAsDone(r.id);
                  }}
                />
                <li key={i}>
                  {" "}
                  {r.status === true ? (
                    <s>
                      <div>
                        {r.text} {r.category} {r.date}
                      </div>
                    </s>
                  ) : (
                    <div>
                      {r.text} {r.category} {r.date}
                    </div>
                  )}
                </li>
                <button onClick={() => del(r)}>del</button>
              </>
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default Search;
