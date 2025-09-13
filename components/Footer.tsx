import config from '@/config.json';

export function Footer() {
  const { institution_full_name, copyright_year } = config.site_settings;

  return (
    <footer className="border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-text-secondary text-sm">
          <p className="mb-4">
            风险提示：投资有风险，入市需谨慎。本网站所有信息仅供参考，不构成任何投资建议。历史表现不代表未来收益。
          </p>
          <p>
            Copyright © {copyright_year} {institution_full_name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}