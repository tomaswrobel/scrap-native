mod swc_utils;
mod visitor;

#[tauri::command]
fn parse(code: String) -> Result<swc_utils::Parsed, ()> {
    return swc_utils::parse(code);
}

#[tauri::command]
fn transform(code: String) -> Result<String, ()> {
    return swc_utils::transform(code).map_err(|_| ());
}

#[tauri::command]
fn variables(code: String) -> Result<Vec<(String, Vec<String>)>, ()> {
    return swc_utils::get_variables(code);
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_fs::init())
        .invoke_handler(tauri::generate_handler![parse, transform, variables])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
