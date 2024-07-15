import { example } from "./codes";

describe("acronymizeHangul", () => {
  it("한글 문장 단어중 첫 문자만 뽑은 리스트를 반환", () => {
    const word1 = example("치킨과 맥주");
    expect(word1).toHaveLength(2);
    expect(word1.join("")).toBe("치맥");

    const word2 = example("버스 충전 카드");
    expect(word2).toHaveLength(3);
    expect(word2.join("")).toBe("버충카");
  });

  it("한글이 아닌 영어를 넣었을 때", () => {
    const init = "test test test";
    const wrongWord = example(init);

    expect(wrongWord).toThrowErrorMatchingSnapshot(
      `${init} is not a valid hangul string`
    );
  });

  it("한글과 영어가 같이 들어가있을 때", () => {
    const init = "한글과 english";
    const wrongWord = example(init);

    expect(wrongWord).toThrowErrorMatchingInlineSnapshot(
      `${init} is not a valid hangul string`
    );
  });
});
