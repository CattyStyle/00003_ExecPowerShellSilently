//WScript.Shellオブジェクト作成
	obj_shell=WScript.CreateObject("WScript.Shell");

//メイン作業ディレクトリを決定し、正規表現によりShellへ渡せる形式へ
	var obj_fso = new ActiveXObject("Scripting.FileSystemObject");
	var dir_projectHome = obj_fso.getParentFolderName(WScript.ScriptFullName);
	var dir_projectHome_regexp = dir_projectHome.replace(/\\/g,"\\\\");

//ps環境準備
	//obj_shell.Run("powershell Set-ExecutionPolicy RemoteSigned")

//メインプログラム実行
	obj_shell.Run("powershell -Command " + dir_projectHome_regexp + "\\Sources\\main.ps1");
