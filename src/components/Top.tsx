export const Top = () => {
  return (
    <div className="fixed w-full bottom-0 px-12 pb-2 lg:pb-10">
      <div className="flex justify-between relative">
        <div className="flex">
          <div className="flex flex-col mr-8">
            <div className="border rounded-full h-8 w-8 mb-2 flex items-center justify-center">
              ⬆️
            </div>
            <div className="border rounded-full h-8 w-8 flex items-center justify-center">
              ⬇️
            </div>
          </div>
          <div className="">
            <div>
              <input
                type="text"
                className="rounded-sm px-4 py-2 mb-2 bg-gray-100 w-full border border-gray-300"
              />
            </div>
            <div className="grid grid-cols-2 gap-1 w-64">
              <div className="flex items-center justify-center bg-green-900 text-xs text-red-500 text-center rounded-md shadow-sm">
                確定
              </div>
              <div className="flex items-center justify-center bg-green-900 text-xs text-red-500 text-center py-2 rounded-md shadow-sm">
                取消
              </div>
              <div className="flex items-center justify-center bg-green-900 text-xs text-red-500 text-center py-2 rounded-md shadow-sm">
                役満放銃
              </div>
              <div className="flex items-center justify-center bg-green-900 text-xs text-red-500 text-center py-2 rounded-md shadow-sm">
                役満ツモられ
              </div>
            </div>
          </div>
        </div>
        <div className="flex border w-32 h-10 absolute bottom-0 right-0 flex items-center justify-evenly">
          <p>打数</p>
          <p>9</p>
        </div>
      </div>
      <div className="border w-full my-2"></div>
      <div className="flex justify-between">
        <div>
          <p>残高</p>
          <p className="text-5xl lg:text-8xl ml-6 tracking-wider">30,000</p>
        </div>
        <div className="grid grid-cols-2 gap-2 w-80">
          <div className="bg-green-900 text-red-500 text-center py-2 h-18 rounded-md shadow-sm">
            履歴
          </div>
          <div className="bg-green-900 text-red-500 text-center py-2 h-18 rounded-md shadow-sm">
            ラスハン
          </div>
          <div className="bg-green-900 text-red-500 text-center py-2 h-18 rounded-md shadow-sm">
            終了
          </div>
          <div className="bg-green-900 text-red-500 text-center py-2 h-18 rounded-md shadow-sm">
            もし
          </div>
        </div>
      </div>
    </div>
  );
};
