<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200126110704 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE skill_employee_entity (id INT AUTO_INCREMENT NOT NULL, skill_id INT NOT NULL, employee_id INT DEFAULT NULL, years_of_experience INT DEFAULT NULL, details VARCHAR(255) DEFAULT NULL, INDEX IDX_11D8F3685585C142 (skill_id), INDEX IDX_11D8F3688C03F15C (employee_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE skill_entity (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, details VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE skill_employee_entity ADD CONSTRAINT FK_11D8F3685585C142 FOREIGN KEY (skill_id) REFERENCES skill_entity (id)');
        $this->addSql('ALTER TABLE skill_employee_entity ADD CONSTRAINT FK_11D8F3688C03F15C FOREIGN KEY (employee_id) REFERENCES employee_entity (id)');
        $this->addSql('ALTER TABLE comment_entity ADD is_for_employee TINYINT(1) DEFAULT NULL');
        $this->addSql('ALTER TABLE customer_entity ADD is_active TINYINT(1) DEFAULT NULL, ADD comment_about_us VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE employee_entity ADD rating INT DEFAULT NULL');
        $this->addSql('ALTER TABLE project_entity ADD is_active TINYINT(1) DEFAULT NULL');
        $this->addSql('ALTER TABLE services_entity ADD is_active TINYINT(1) DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE skill_employee_entity DROP FOREIGN KEY FK_11D8F3685585C142');
        $this->addSql('DROP TABLE skill_employee_entity');
        $this->addSql('DROP TABLE skill_entity');
        $this->addSql('ALTER TABLE comment_entity DROP is_for_employee');
        $this->addSql('ALTER TABLE customer_entity DROP is_active, DROP comment_about_us');
        $this->addSql('ALTER TABLE employee_entity DROP rating');
        $this->addSql('ALTER TABLE project_entity DROP is_active');
        $this->addSql('ALTER TABLE services_entity DROP is_active');
    }
}
